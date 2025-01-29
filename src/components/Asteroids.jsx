import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

// Perlin Noise Function for organic motion
const perlin = (x, y, z) => {
    return Math.sin(x * 0.3 + Math.cos(y * 0.2) + Math.sin(z * 0.1));
};

const Asteroid = ({ position, scale, velocity }) => {
    const ref = useRef();

    useFrame(({ clock }) => {
        if (ref.current) {
            const t = clock.getElapsedTime();

            // Organic drifting effect
            ref.current.position.x += perlin(t * 0.05, position[1], position[2]) * 0.005;
            ref.current.position.y += perlin(position[0], t * 0.03, position[2]) * 0.005;
            ref.current.position.z += perlin(position[0], position[1], t * 0.02) * 0.005;

            // Slow rotation
            ref.current.rotation.x += MathUtils.lerp(0, 0.002, 0.05);
            ref.current.rotation.y += MathUtils.lerp(0, 0.001, 0.05);
        }
    });

    return (
        <mesh ref={ref} position={position} scale={scale}>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshStandardMaterial color="#666666" roughness={0.95} metalness={0.1} />
        </mesh>
    );
};

const Asteroids = ({ count = 100 }) => {
    const asteroids = [];

    for (let i = 0; i < count; i++) {
        const position = [
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        ];
        const scale = Math.random() * 0.4 + 0.2;
        const velocity = [
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02
        ];

        asteroids.push(<Asteroid key={i} position={position} scale={scale} velocity={velocity} />);
    }

    return <>{asteroids}</>;
};

export default Asteroids;


