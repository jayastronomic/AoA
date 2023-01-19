import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sword() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/sword.gltf");
  return (
    <group
      position={[-0.12, 0.36, -0.2]}
      scale={[0.135, 0.135, 0.135]}
      ref={group}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object_2.geometry}>
          <meshPhysicalMaterial
            color={"black"}
            clearcoat={1}
            clearcoatRoughness={0.2}
            reflectivity={0}
          />
        </mesh>
        <mesh geometry={nodes.Object_3.geometry}>
          <meshPhysicalMaterial
            color={"black"}
            clearcoat={1}
            clearcoatRoughness={0.2}
            reflectivity={0}
          />
        </mesh>
        <mesh geometry={nodes.Object_4.geometry}>
          <meshPhysicalMaterial
            color={"black"}
            clearcoat={1}
            clearcoatRoughness={0.2}
            reflectivity={0}
          />
        </mesh>
        <mesh geometry={nodes.Object_5.geometry}>
          <meshPhysicalMaterial
            color={"black"}
            clearcoat={1}
            clearcoatRoughness={0.2}
            reflectivity={0}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/sword.gltf");
