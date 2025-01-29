import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const GlowingRings = ({ position }) => {
    const ringRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        const scale = Math.sin(time * 1.5) * 0.2 + 0.8; // Reduced pulsating effect
        if (ringRef.current) {
            ringRef.current.scale.set(scale, scale, scale);
            ringRef.current.material.opacity = 0.2 + Math.abs(Math.sin(time * 1.5)) * 0.5;
        }
    });

    return (
        <mesh ref={ringRef} position={position}>
            <ringGeometry args={[0.4, 0.6, 64]} /> {/* Smaller size */}
            <meshStandardMaterial
                color="#00ffcc" // Changed to a neon teal color
                transparent
                opacity={0.5}
                emissive="#00cc99" // Matching emissive color for a glow effect
                emissiveIntensity={1.0}
            />
        </mesh>
    );
};

export default GlowingRings;



