/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 aquarius.gltf
Author: atti1234 (https://sketchfab.com/atti1234)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/statue-aquarius-25k-560cb117b3cb4fbb9269e962204ccbb0
Title: Statue Aquarius 25k
*/

import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model() {
  const group = useRef();
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/aquarius.gltf");
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group position={[-0.15, -0.38, 1.5]} ref={group} dispose={null}>
      <mesh
        ref={mesh}
        scale={[0.13, 0.13, 0.13]}
        geometry={nodes.Object_2.geometry}
        position={[-0.01, 0.25, 0.0]}
        rotation={[Math.PI / 1.9, 1.55, 4.8]}
      >
        <meshPhysicalMaterial
          color={"black"}
          clearcoat={1}
          clearcoatRoughness={0.2}
          reflectivity={0.3}
        />
        <Html
          position={[4, -1, -0.05]}
          rotation={[Math.PI / 1.6, 0, 1.6]}
          transform
          occlude
        >
          <div className="flex text-white bg-black bg-opacity-80 rounded-2xl border-white border px-4 text-xs space-x-2 py-1">
            <span>Water</span> <span>Bearer</span>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/aquarius.gltf");