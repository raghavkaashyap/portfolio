import React, { useEffect, useState } from 'react';
import Navbar from "./sections/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const SIMPLE_KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown'];
const NEON_STORAGE_KEY = 'neon-mode-enabled';

const App = () => {
    const [eggToast, setEggToast] = useState('');
    const [showEggToast, setShowEggToast] = useState(false);
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

    useEffect(() => {
        let recentKeys = [];
        let hideToastTimer;

        const triggerToast = (message) => {
            setEggToast(message);
            setShowEggToast(true);
            clearTimeout(hideToastTimer);
            hideToastTimer = setTimeout(() => setShowEggToast(false), 3600);
        };

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

            recentKeys = [...recentKeys, key].slice(-SIMPLE_KONAMI.length);
            if (SIMPLE_KONAMI.every((codeKey, index) => codeKey === recentKeys[index])) {
                triggerToast('Secret unlocked: retro gamer mode activated.');
                recentKeys = [];
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            clearTimeout(hideToastTimer);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
        <main
            className="max-w-7xl mx-auto transition-all duration-500"
            style={isNeonPulseOn ? { filter: 'hue-rotate(125deg) saturate(1.2)' } : undefined}
        >
            <Navbar
                isNeonPulseOn={isNeonPulseOn}
                onToggleNeonPulse={() => setIsNeonPulseOn((prev) => !prev)}
            ></Navbar>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
            <Footer></Footer>

            {showEggToast && (
                <div className="fixed top-24 right-4 z-50 rounded-lg border border-purple-400 bg-black/85 px-4 py-3 text-sm text-purple-200 shadow-lg shadow-purple-500/20">
                    {eggToast}
                </div>
            )}
        </main>
    )
}
export default App
