import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import Evanescent from "../fonts/evanescent.json";
import { useRef } from "react";
import { useState } from "react";
import { Model as Aquarius } from "./Aquarius";
import { Sword } from "./Sword";
import { Html } from "@react-three/drei";

extend({ TextGeometry });

export default function AOA({ location }) {
  const group = useRef();

  const font = new FontLoader().parse(Evanescent);
  const [color, setColor] = useState("black");
  const [color2, setColor2] = useState("black");
  const [color3, setColor3] = useState("black");

  const config = {
    font,
    size: 1.2,
    height: 0,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.01,
    bevelSegments: 0.5,
  };
  const Oconfig = {
    font,
    size: 1.3,
    height: 0,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.01,
    bevelSegments: 0.5,
  };
  // if (location.pathname === "/information") {
  //   return null;
  // }

  return (
    <group ref={group} position={[0.1, 0.3, 1.0]}>
      <mesh
        onPointerEnter={() => setColor("#1c1c1c")}
        onPointerLeave={() => setColor("black")}
        position={[-1.5, 0, 0.0]}
      >
        <textGeometry args={["a", config]} />
        <meshPhysicalMaterial
          attach="material"
          color={color}
          clearcoat={0.9}
          reflectivity={0.5}
        />
      </mesh>
      <Aquarius />
      <mesh
        onPointerEnter={() => setColor2("#1c1c1c")}
        onPointerLeave={() => setColor2("black")}
        position={[-0.4, 1.15, 0.0]}
      >
        <textGeometry args={["o", Oconfig]} />
        <meshPhysicalMaterial
          attach="material"
          color={color2}
          clearcoat={0.9}
          reflectivity={0.5}
        />
        <Sword />
      </mesh>
      <mesh
        onPointerEnter={() => setColor3("#1c1c1c")}
        onPointerLeave={() => setColor3("black")}
        position={[0.5, 0, 0.0]}
      >
        <textGeometry args={["a", config]} />
        <meshPhysicalMaterial
          attach="material"
          color={color3}
          clearcoat={0.9}
          reflectivity={0.5}
        />
      </mesh>
    </group>
  );
}
