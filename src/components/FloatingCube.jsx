import React from 'react';
import { useFrame } from "@react-three/fiber";

const FloatingCube = (props) => {
    const ref = React.useRef();

    useFrame(({ clock }) => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
        ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
    });

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
};

export default FloatingCube;
