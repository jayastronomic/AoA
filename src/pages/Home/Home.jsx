import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import AOA from "../../components/AOA";
import Interface from "../../components/Interface";
import Information from "../Information";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const [signal, setSignal] = useState("left-full");
  return (
    <div className="relative">
      <div className="absolute">
        <Canvas style={{ width: "100vw", height: "100vh" }}>
          <color attach="background" args={["#000000"]} />
          <spotLight
            position={[10, 22, 25]}
            color={"white"}
            intensity={3}
            distance={200}
          />

          <AOA signal={signal} />
          <OrbitControls />
        </Canvas>
      </div>
      <Interface />
      <Information setSignal={setSignal} />
    </div>
  );
};

export default Home;
