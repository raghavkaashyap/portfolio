import { useEffect, useRef, useState } from 'react';

const RAPID_TAP_WINDOW_MS = 1200;
const NAME_TAP_TARGET = 5;

const Footer = () => {
    const [showNameEgg, setShowNameEgg] = useState(false);
    const tapCountRef = useRef(0);
    const lastTapAtRef = useRef(0);
    const hideEggTimerRef = useRef();

    const handleNameTap = () => {
        const now = Date.now();
        const isRapidTap = now - lastTapAtRef.current < RAPID_TAP_WINDOW_MS;

        tapCountRef.current = isRapidTap ? tapCountRef.current + 1 : 1;
        lastTapAtRef.current = now;

        if (tapCountRef.current >= NAME_TAP_TARGET) {
            setShowNameEgg(true);
            tapCountRef.current = 0;
            clearTimeout(hideEggTimerRef.current);
            hideEggTimerRef.current = setTimeout(() => setShowNameEgg(false), 3200);
        }
    };

    useEffect(() => {
        return () => clearTimeout(hideEggTimerRef.current);
    }, []);

    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col items-center gap-5">
            <div className="social-icons-container flex gap-4 justify-center">
                <div className="social-icon">
                    <a href="https://github.com/raghavkaashyap" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/raghavkaashyap/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                </div>
            </div>

            <button
                type="button"
                onClick={handleNameTap}
                className="text-white-500 text-center cursor-pointer select-none"
                style={{ paddingLeft: '8px' }}
                title="Names remember who clicks them."
            >
                Raghav Kaashyap
            </button>

            {showNameEgg && (
                <p className="text-sm text-purple-300">Achievement: Persistent debugger unlocked.</p>
            )}
        </footer>
    );
};

export default Footer;
