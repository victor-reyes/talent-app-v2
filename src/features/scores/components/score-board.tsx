import { Separator } from "@/components/ui/separator";
import { AverageScore } from "./average-score";
import { SpiderGraph } from "./spider-graph";
import { H2 } from "@/components/ui/header/header-h2";
import { scoresService } from "../instance";
import { CategoryGroups } from "./accordion";
import { AddAssignment } from "./add-assignment";

export async function ScoreBoard() {
  const hardcodedUserId = 1;
  const scores =
    await scoresService.getScoreById(hardcodedUserId);

  return (
    <section className="min-w-72">
      <AddAssignment scores={scores}/>
      <Separator className="my-4" />
      <H2>Salt Scoring</H2>
      <AverageScore averageScore={scores.averageScore} />
      <SpiderGraph scores={scores} />
      <CategoryGroups scores={scores} />
    </section>
  );
}