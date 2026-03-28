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

const Home = ({ isCandylandModeOn }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className={`w-full mx-auto flex flex-col text-center c-space z-10 relative ${isCandylandModeOn ? 'mt-20 gap-5' : 'mt-28 gap-3'}`}>
                <p className={`sm:text-3xl text-2xl font-bold ${isCandylandModeOn ? 'text-white drop-shadow-[0_2px_10px_rgba(32,16,75,0.65)]' : 'text-white'}`}>
                    Hi, I'm Raghav <span className="waving-hand" title="Tip: keyboard secrets exist.">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient sm:text-lg text-base">
                    I'm a junior at Iowa State University, passionate about coding and solving problems
                </p>

                {isCandylandModeOn && (
                    <div className="mx-auto mt-1 rounded-2xl border border-white/20 bg-[#3148af]/35 px-6 py-4 text-sm text-indigo-100 shadow-lg backdrop-blur-sm max-w-xl">
                        Welcome to Candyland mode: colorful vibes, playful visuals, and a smoother browsing flow.
                    </div>
                )}

                {isCandylandModeOn && (
                    <div className="flex justify-center w-full pt-2">
                        <button
                            onClick={handleModalToggle}
                            className="bg-pink-500/90 hover:bg-pink-500 text-white px-7 py-3 rounded-full text-lg shadow-md shadow-pink-500/30"
                        >
                            My Resume
                        </button>
                    </div>
                )}
            </div>

            {isCandylandModeOn ? (
                <div className="w-full h-full absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f5c] via-[#23328f] to-[#4e45b9]" />
                    <div className="absolute inset-0 opacity-65 bg-[radial-gradient(circle_at_14%_12%,rgba(255,186,84,0.42),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(164,236,255,0.44),transparent_36%),radial-gradient(circle_at_22%_78%,rgba(255,123,200,0.38),transparent_40%),radial-gradient(circle_at_76%_82%,rgba(160,255,177,0.34),transparent_41%)]" />

                    <div className="absolute -left-20 top-20 h-52 w-52 rounded-[45%] bg-[#ff8dd7]/65 blur-xl" />
                    <div className="absolute left-[15%] bottom-8 h-40 w-56 rounded-[50%] bg-[#ffe47f]/45 blur-2xl" />
                    <div className="absolute right-[-2rem] top-24 h-64 w-56 rounded-[48%] bg-[#92f2ff]/55 blur-xl" />
                    <div className="absolute right-[10%] bottom-[-2rem] h-56 w-64 rounded-[42%] bg-[#9dffbd]/40 blur-2xl" />

                    <div className="absolute left-[35%] top-[24%] h-3 w-3 rounded-full bg-white/80" />
                    <div className="absolute left-[42%] top-[38%] h-2.5 w-2.5 rounded-full bg-[#fff5b6]/90" />
                    <div className="absolute right-[32%] top-[30%] h-2 w-2 rounded-full bg-[#ffd1f0]/95" />
                    <div className="absolute right-[24%] top-[46%] h-3 w-3 rounded-full bg-[#b8ffdf]/85" />
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
