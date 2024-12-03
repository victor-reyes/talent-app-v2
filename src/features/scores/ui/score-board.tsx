
import { HeaderH1 } from "@/components/ui/header/header-h1";
import { AccordionBoard } from "./accordion/accordion-board";
import { AverageScore } from "./average-score";
import { SpiderGraph } from "./spider-graph";

export function ScoreBoard() {
  return (
    <section>
      <HeaderH1>
        Salt Scoring
        </HeaderH1>
      <AverageScore />
      <SpiderGraph />
      <AccordionBoard />
    </section>
  );
}
