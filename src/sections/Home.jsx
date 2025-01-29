import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import Sphere from '../components/Sphere.jsx';
import FloatingCube from '../components/FloatingCube.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import ResumeModal from '../components/ResumeModal.jsx';
import GlowingCrystal from '../components/GlowingCrystal.jsx';
import GlowingRings from '../components/GlowingRings.jsx';
import Asteroids from '../components/Asteroids.jsx'; // New Import

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col mt-28 text-center c-space gap-3">
                <p className="sm:text-3xl text-2xl font-bold text-white">
                    Hi, I'm Raghav <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient sm:text-lg text-base">
                    I'm a sophomore at Iowa State University, passionate about coding and solving problems
                </p>
            </div>

            {/* 3D Canvas */}
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

            <div className="absolute bottom-10 left-0 right-0 flex justify-center w-full z-10">
                <button
                    onClick={handleModalToggle}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-lg shadow-md"
                >
                    My Resume
                </button>
            </div>

            {isModalOpen && <ResumeModal onClose={handleModalToggle} />}
        </section>
    );
};

export default Home;

