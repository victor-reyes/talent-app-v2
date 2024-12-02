import { AccordionBoard } from "./accordion/accordion-board";
import { Heading } from "./heading";

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
