import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
    const [lightsOn, setLightsOn] = useState(true);
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* lamp button */}
            <button
                onClick={() => setLightsOn(!lightsOn)}
                className={`
    absolute px-6 py-4 z-50
    top-85 right-65 md:top-50 md:right-220

    rounded-2xl border-2
    md:text-md text-xs font-light tracking-wider
    text-nowrap

    backdrop-blur-md shadow-md
    transition-all duration-300 ease-in-out
    cursor-pointer

    ${
        lightsOn
            ? "bg-amber-200/20 border-amber-100/50 text-amber-100 hover:bg-white/20 hover:text-amber-50 hover:border-white/50"
            : "bg-white/10 border-white/40 text-white/60 hover:bg-white/20 hover:text-amber-200 hover:border-white/70"
    }
  `}
            >
                {lightsOn ? "Turn Off Lamp" : "Turn On Lamp"}
            </button>

            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />

                <HeroLights lightsOn={lightsOn} />

                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Canvas>
        </div>
    );
};

export default HeroExperience;
