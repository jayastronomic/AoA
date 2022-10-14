import React from "react";

const Relic = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshDepthMaterial attach="material" color="gray" />
    </mesh>
  );
};

export default Relic;
