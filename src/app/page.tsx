import { DeveloperCard } from "@/components/ui/developer-card";
import { ProjectCard } from "@/features/projects/components/project-card";
import { ScoreBoard } from "@/features/scores";

export default function Home() {
  return (
    <>
      <DeveloperCard>
       <ScoreBoard/>
      <ProjectCard />
      </DeveloperCard>
    </>
  );
}
