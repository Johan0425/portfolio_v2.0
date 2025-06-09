import { SkillTag } from '@/components/ui/SkillTag';
import { SceneLoader } from '@/components/canvas/SceneLoader'; // Should import the Loader

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      {/* 3D Layer (Background) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {/* Should use the SceneLoader component */}
        <SceneLoader />
      </div>

      {/* 2D Layer (Content) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">The Creators Workshop</h1>
          <p className="mt-4 text-lg text-zinc-400">
            A new experience under construction.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <SkillTag label="React" />
            <SkillTag label="Next.js" />
            <SkillTag label="Three.js" />
          </div>
        </div>
      </div>
    </main>
  );
}