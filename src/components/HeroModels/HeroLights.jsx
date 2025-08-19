

import * as THREE from "three";

const HeroLights = ({ lightsOn } ) => {

    return (
        <>
            {/* lamp */}
            <spotLight
                position={[1, 6, 3]}
                angle={0.25}
                intensity={lightsOn ? 200 : 0}
                penumbra={0.5}
                color={"#F5EFA4"}
            />

            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                penumbra={0.5}
                intensity={20}
                color="#4cc9f0"
            />
            {/* purplish side fill */}
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                penumbra={1}
                intensity={10}
                color="#9d4edd"
            />
            {/* area light for soft moody fill */}
            <primitive
                object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
                position={[1, 3, 5]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={15}
            />
            {/* subtle point light for atmospheric tone */}
            <pointLight position={[0, 1, 0]} intensity={5} color="#7209b7" />
            <pointLight position={[1, 2, 1]} intensity={10} color="#0d00a4" />
        </>
    );
};

export default HeroLights;
