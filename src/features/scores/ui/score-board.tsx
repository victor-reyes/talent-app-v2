import { AccordionBoard } from "./accordion/accordion-board";
import { AverageScore } from "./average-score";
import { Heading } from "./heading";
import { SpiderGraph } from "./spider-graph";

export function ScoreBoard() {
  return (
    <section>
      <Heading title="Salt Scoring" />
      <AverageScore />
      <SpiderGraph />
      <AccordionBoard />
    </section>
  );
}
