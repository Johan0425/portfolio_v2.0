'use client'; // Directiva necesaria para que los componentes de cliente funcionen en Next.js App Router

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
      {/* Luces */}
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#18181b" /> {/* Mismo color que bg-zinc-900 */}
      </mesh>

      {/* Ayudante para mover la cámara (lo quitaremos después) */}
      <OrbitControls />
    </Canvas>
  );
};