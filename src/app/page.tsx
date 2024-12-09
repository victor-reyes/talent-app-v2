import { DeveloperCard } from "@/components/ui/developer-card";
import { Background } from "@/features/background/ui";
import { Projects } from "@/features";
import { ScoreBoard } from "@/features/scores";

export default function Home() {
  return (
    <>
      <DeveloperCard>
        <Background />
        <ScoreBoard />
        <Projects />
      </DeveloperCard>
    </>
  );
}
