'use client'; // This must be the very first line

import dynamic from 'next/dynamic';

// The dynamic import happens here, inside the client component
const SceneWithNoSSR = dynamic(
  () => import('@/components/canvas/Scene').then((mod) => mod.Scene),
  { ssr: false } // This disables server-side rendering
);

// The loader component renders the dynamically imported scene
export const SceneLoader = () => {
  return <SceneWithNoSSR />;
};