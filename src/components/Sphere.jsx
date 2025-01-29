import React from 'react';
import { useFrame } from "@react-three/fiber";

const Sphere = (props) => {
    const ref = React.useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.01;
    });

    return (
        <mesh {...props} ref={ref}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="skyblue" wireframe />
        </mesh>
    );
};

export default Sphere;
