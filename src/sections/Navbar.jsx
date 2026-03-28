import React from 'react'
import PropTypes from 'prop-types';
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = ({ isNeonPulseOn, onToggleNeonPulse }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Raghav
                    </a>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={onToggleNeonPulse}
                            className={`rounded-md border px-3 py-1 text-xs sm:text-sm transition-colors ${
                                isNeonPulseOn
                                    ? 'border-cyan-300 bg-cyan-500/20 text-cyan-200'
                                    : 'border-neutral-500 bg-transparent text-neutral-300 hover:text-white'
                            }`}
                            title="Toggle Neon Mode (Shift+K)"
                            aria-label="Toggle neon mode"
                        >
                            Neon: {isNeonPulseOn ? 'On' : 'Off'}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle menu"
                        >
                            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu" className="w-6 h-6 cursor-pointer"/>
                        </button>
                    </div>

                    <nav className="sm:flex hidden">
                        <NavItems></NavItems>
                    </nav>
                </div>


            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems></NavItems>
                </nav>
            </div>
        </header>
    )
}

Navbar.propTypes = {
    isNeonPulseOn: PropTypes.bool.isRequired,
    onToggleNeonPulse: PropTypes.func.isRequired,
};

export default Navbar
