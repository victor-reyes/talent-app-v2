import { Background } from "@/features/developer-background/ui";
import ProjectCard from "@/features/projects/components/project-card";

export default function Home() {
  return (
    <>
      <ProjectCard />
      {/* "watch out confilict" */}
      <Background />
    </>
  );
}
