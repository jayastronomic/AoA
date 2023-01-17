import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { WaveMaterial } from "./WaveMaterial";

export default function ShaderPlane() {
  const ref = useRef();
  const { width, height } = useThree((state) => state.viewport);
  useFrame((state, delta) => (ref.current.time += delta));
  return (
    <mesh scale={[width, height, 3]}>
      <planeGeometry />
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        toneMapped={true}
        colorStart={"#505050"}
        colorEnd={"black"}
      />
    </mesh>
  );
}
