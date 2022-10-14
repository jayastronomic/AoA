import React, { useEffect } from "react";
import Player from "../../components/Player";
import Relic from "../../components/Relic";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Relic />
      </Canvas>
    </div>
  );
};

export default Home;
