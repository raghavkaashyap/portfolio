import React, { useEffect, useRef, useState } from 'react';
import Navbar from "./sections/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Coursework from "./sections/Coursework.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const ARCADE_SEQUENCE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown'];
const CANDYLAND_SEQUENCE = ['arrowleft', 'arrowleft', 'arrowright', 'arrowright'];
const NEON_STORAGE_KEY = 'neon-mode-enabled';

const App = () => {
    const [eggToast, setEggToast] = useState('');
    const [showEggToast, setShowEggToast] = useState(false);
    const toastTimerRef = useRef();
    const [isArcadeModeOn, setIsArcadeModeOn] = useState(false);
    const [isCandylandModeOn, setIsCandylandModeOn] = useState(false);
    const [isNeonPulseOn, setIsNeonPulseOn] = useState(() => {
        try {
            return localStorage.getItem(NEON_STORAGE_KEY) === 'true';
        } catch {
            return false;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(NEON_STORAGE_KEY, String(isNeonPulseOn));
        } catch {
            // Ignore storage issues in privacy-restricted contexts.
        }
    }, [isNeonPulseOn]);

    const triggerToast = (message) => {
        setEggToast(message);
        setShowEggToast(true);
        clearTimeout(toastTimerRef.current);
        toastTimerRef.current = setTimeout(() => setShowEggToast(false), 3600);
    };

    useEffect(() => {
        return () => {
            clearTimeout(toastTimerRef.current);
        };
    }, []);

    useEffect(() => {
        let recentKeys = [];

        const onKeyDown = (event) => {
            const key = event.key.toLowerCase();

            if (event.shiftKey && key === 'k' && !event.repeat) {
                setIsNeonPulseOn((prev) => {
                    const next = !prev;
                    triggerToast(next ? 'Neon mode is now ON.' : 'Neon mode is now OFF.');
                    return next;
                });
                return;
            }

            if (!key.startsWith('arrow')) return;

            recentKeys = [...recentKeys, key].slice(-ARCADE_SEQUENCE.length);

            const isArcadeMatch = ARCADE_SEQUENCE.every((codeKey, index) => codeKey === recentKeys[index]);
            if (isArcadeMatch) {
                setIsArcadeModeOn((prev) => {
                    const next = !prev;
                    if (next) {
                        setIsCandylandModeOn(false);
                        triggerToast('Secret unlocked: retro gamer mode activated.');
                    } else {
                        triggerToast('Retro gamer mode disabled.');
                    }
                    return next;
                });
                recentKeys = [];
                return;
            }

            const isCandylandMatch = CANDYLAND_SEQUENCE.every((codeKey, index) => codeKey === recentKeys[index]);
            if (isCandylandMatch) {
                setIsCandylandModeOn((prev) => {
                    const next = !prev;
                    if (next) {
                        setIsArcadeModeOn(false);
                        triggerToast('Candyland mode activated.');
                    } else {
                        triggerToast('Candyland mode disabled.');
                    }
                    return next;
                });
                recentKeys = [];
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle('theme-candyland-body', isCandylandModeOn);
        return () => document.body.classList.remove('theme-candyland-body');
    }, [isCandylandModeOn]);

    const handleNavbarNeonToggle = () => {
        setIsNeonPulseOn((prev) => {
            const next = !prev;
            if (next) {
                triggerToast('Neon mode activated.');
            }
            return next;
        });
    };

    const activeThemeFilter = isArcadeModeOn
        ? 'contrast(1.45) saturate(1.85) hue-rotate(155deg) brightness(1.08)'
        : isNeonPulseOn
            ? 'hue-rotate(125deg) saturate(1.2)'
            : undefined;

    const arcadeOverlayStyle = {
        backgroundImage: `
            repeating-linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.12) 0px,
                rgba(0, 0, 0, 0.12) 2px,
                rgba(255, 255, 255, 0.02) 2px,
                rgba(255, 255, 255, 0.02) 4px
            ),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.17), transparent 58%),
            radial-gradient(circle at 20% 15%, rgba(255, 0, 180, 0.22), transparent 42%),
            radial-gradient(circle at 82% 82%, rgba(80, 120, 255, 0.22), transparent 45%)
        `,
        mixBlendMode: 'screen',
        opacity: 0.34,
    };

    return (
        <main
            className={`max-w-7xl mx-auto transition-all duration-500 ${isCandylandModeOn ? 'theme-candyland' : ''}`}
            style={activeThemeFilter ? { filter: activeThemeFilter } : undefined}
        >
            <Navbar
                isNeonPulseOn={isNeonPulseOn}
                onToggleNeonPulse={handleNavbarNeonToggle}
            ></Navbar>
            <Home isCandylandModeOn={isCandylandModeOn}></Home>
            <About></About>
            <Coursework></Coursework>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
            <Footer></Footer>

            {isArcadeModeOn && !isCandylandModeOn && (
                <div
                    className="pointer-events-none fixed inset-0 z-40"
                    style={arcadeOverlayStyle}
                    aria-hidden="true"
                />
            )}

            {showEggToast && (
                <div className="fixed top-24 right-4 z-50 rounded-lg border border-purple-400 bg-black/85 px-4 py-3 text-sm text-purple-200 shadow-lg shadow-purple-500/20">
                    {eggToast}
                </div>
            )}
        </main>
    )
}
export default App
