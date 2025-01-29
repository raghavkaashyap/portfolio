import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const GlowingCrystal = ({ position }) => {
    const crystalRef = useRef();

    useFrame(() => {
        if (crystalRef.current) {
            crystalRef.current.rotation.y += 0.01; // Slow rotation
        }
    });

    return (
        <mesh ref={crystalRef} position={position}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                emissive="#88ccff" // Base glow color
                emissiveIntensity={2} // Intensity of the glow
                color="cyan" // Base color
                roughness={0.3} // Slight roughness for texture
                metalness={0.8} // Reflective metallic effect
            />
        </mesh>
    );
};

export default GlowingCrystal;


