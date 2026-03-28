import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import Sphere from '../components/Sphere.jsx';
import FloatingCube from '../components/FloatingCube.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import ResumeModal from '../components/ResumeModal.jsx';
import GlowingCrystal from '../components/GlowingCrystal.jsx';
import GlowingRings from '../components/GlowingRings.jsx';
import Asteroids from '../components/Asteroids.jsx';
import CandylandDecor from '../components/CandylandDecor.jsx';

const Home = ({ isCandylandModeOn }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section
            className={`w-full flex flex-col relative overflow-hidden ${isCandylandModeOn ? 'min-h-[86vh] pt-24' : 'min-h-screen'}`}
            id="home"
        >
            {isCandylandModeOn ? (
                <div className="w-full h-full absolute inset-0" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#111f5f] via-[#2f3e98] to-[#5a52bf]" />
                    <div className="absolute inset-0 opacity-70 candyland-aurora bg-[radial-gradient(circle_at_12%_18%,rgba(255,166,214,0.40),transparent_35%),radial-gradient(circle_at_86%_20%,rgba(133,230,255,0.42),transparent_38%),radial-gradient(circle_at_22%_84%,rgba(255,220,127,0.30),transparent_40%),radial-gradient(circle_at_78%_82%,rgba(165,255,190,0.30),transparent_42%)]" />

                    <div className="absolute inset-0 pointer-events-none opacity-90">
                        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 45 }}>
                            <Suspense fallback={null}>
                                <CandylandDecor />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="absolute left-[-5.5rem] top-14 h-56 w-56 rounded-[46%] bg-[#f28fe1]/55 blur-xl candyland-blob candyland-drift-1" />
                    <div className="absolute right-[-4.5rem] top-20 h-64 w-56 rounded-[44%] bg-[#8ee9ff]/55 blur-xl candyland-blob candyland-drift-2" />
                    <div className="absolute left-[8%] bottom-[-5rem] h-44 w-64 rounded-[50%] bg-[#ffd98a]/35 blur-2xl candyland-blob candyland-drift-3" />
                    <div className="absolute right-[10%] bottom-[-4.5rem] h-52 w-64 rounded-[40%] bg-[#96f9d0]/30 blur-2xl candyland-blob candyland-drift-4" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.16),transparent_42%)]" />

                    <div className="absolute left-[34%] top-[33%] h-3 w-3 rounded-full bg-white/80 candyland-sparkle candyland-twinkle-1" />
                    <div className="absolute left-[42%] top-[41%] h-2.5 w-2.5 rounded-full bg-[#fff5b6]/90 candyland-sparkle candyland-twinkle-2" />
                    <div className="absolute right-[30%] top-[35%] h-2 w-2 rounded-full bg-[#ffd1f0]/95 candyland-sparkle candyland-twinkle-3" />
                    <div className="absolute right-[24%] top-[45%] h-3 w-3 rounded-full bg-[#b8ffdf]/85 candyland-sparkle candyland-twinkle-4" />
                </div>
            ) : (
                <div className="w-full h-full absolute inset-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 5]} intensity={1} />
                            <OrbitControls enableZoom={false} />

                            <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} />

                            <Sphere position={[-3, 1, 0]} />
                            <FloatingCube position={[3, -1.2, -2]} />
                            <GlowingCrystal position={[0.5, -1.8, -3]} color="#FF69B4" />
                            <GlowingRings position={[-2, -1, -2]} color="#FFD700" scale={0.8} />

                            <Asteroids count={30} />
                        </Suspense>
                    </Canvas>
                </div>
            )}

            <div
                className={`w-full mx-auto flex flex-col text-center c-space z-10 relative ${
                    isCandylandModeOn ? 'gap-6' : 'mt-28 gap-3'
                }`}
            >
                <div className={`flex flex-col ${isCandylandModeOn ? 'max-w-4xl mx-auto candyland-hero-enter gap-4' : 'gap-3'}`}>
                    <p className={`sm:text-3xl text-2xl font-bold ${isCandylandModeOn ? 'text-white drop-shadow-[0_4px_14px_rgba(18,18,60,0.55)]' : 'text-white'}`}>
                        Hi, I'm Raghav <span className="waving-hand" title="Tip: keyboard secrets exist.">👋</span>
                    </p>
                    <p className={`hero_tag ${isCandylandModeOn ? 'text-white/95 text-xl sm:text-3xl font-semibold' : 'text-gray_gradient sm:text-lg text-base'}`}>
                        I'm a junior at Iowa State University, passionate about coding and solving problems
                    </p>
                </div>

                {isCandylandModeOn ? (
                    <div className="flex justify-center w-full">
                        <button
                            onClick={handleModalToggle}
                            className="bg-[#f44fa3] hover:bg-[#ef3e98] text-white px-9 py-3 rounded-full text-2xl sm:text-3xl font-medium shadow-lg shadow-pink-500/35 transition-colors candyland-cta-float"
                        >
                            My Resume
                        </button>
                    </div>
                ) : null}
            </div>

            {!isCandylandModeOn && (
                <div className="absolute bottom-10 left-0 right-0 flex justify-center w-full z-10">
                    <button
                        onClick={handleModalToggle}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-lg shadow-md"
                    >
                        My Resume
                    </button>
                </div>
            )}

            {isModalOpen && <ResumeModal onClose={handleModalToggle} />}
        </section>
    );
};

Home.propTypes = {
    isCandylandModeOn: PropTypes.bool.isRequired,
};

export default Home;
