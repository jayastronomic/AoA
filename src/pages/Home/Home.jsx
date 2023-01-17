import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import AOA from "../../components/AOA";
import ShaderPlane from "../../components/ShaderPlane";
import Interface from "../../components/Interface";
import Information from "../Information";

const Home = () => {
  return (
    <div className="relative left">
      <div className="absolute">
        <Canvas style={{ width: "100vw", height: "100vh" }}>
          <color attach="background" args={["#000000"]} />
          <spotLight
            position={[10, 22, 25]}
            color={"white"}
            intensity={3}
            distance={200}
          />
          <AOA />
          <ShaderPlane />
        </Canvas>
      </div>
      <Interface />
      <Information />
    </div>
  );
};

export default Home;
