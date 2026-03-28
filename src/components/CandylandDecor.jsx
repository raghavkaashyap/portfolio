import { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';

const CandyOrb = ({ color, position, speed, scale }) => {
    const orbRef = useRef(null);

    useFrame(({ clock }) => {
        if (!orbRef.current) return;
        const t = clock.elapsedTime * speed;
        orbRef.current.position.y = position[1] + Math.sin(t) * 0.22;
        orbRef.current.rotation.x = t * 0.25;
        orbRef.current.rotation.y = t * 0.35;
    });

    return (
        <mesh ref={orbRef} position={position} scale={scale}>
            <icosahedronGeometry args={[0.56, 0]} />
            <meshStandardMaterial color={color} roughness={0.2} metalness={0.05} />
        </mesh>
    );
};

CandyOrb.propTypes = {
    color: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    speed: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired,
};

const CandylandDecor = () => {
    const orbs = useMemo(
        () => [
            { color: '#ff8fd2', position: [-3.7, -0.6, -2.8], speed: 0.85, scale: 1.05 },
            { color: '#8fe8ff', position: [3.5, -0.8, -2.5], speed: 0.72, scale: 1.12 },
            { color: '#ffe18f', position: [-1.2, -1.6, -2.2], speed: 0.95, scale: 0.88 },
            { color: '#a6ffd2', position: [1.8, -1.45, -2.3], speed: 0.78, scale: 0.95 },
            { color: '#f8b4ff', position: [0.3, -2.05, -2.6], speed: 0.9, scale: 0.8 },
        ],
        []
    );

    return (
        <group>
            <ambientLight intensity={0.75} />
            <pointLight position={[2, 3, 5]} intensity={1.3} color="#ffffff" />
            <pointLight position={[-3, -2, 3]} intensity={0.9} color="#ffd3f6" />
            {orbs.map((orb, idx) => (
                <CandyOrb key={idx} {...orb} />
            ))}
        </group>
    );
};

export default CandylandDecor;
