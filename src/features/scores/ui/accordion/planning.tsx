import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProgressRing } from "../progress-ring";
import { DeveloperScore } from "../../types";

type Props = {
  developerScore: DeveloperScore;
};

export function Planning({ developerScore }: Props) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <ProgressRing percentage={developerScore.planningScore} />
          Planning
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col mr-2 pl-8">
            <span className="flex flex-row gap-4 pb-2 items-center">
              <ProgressRing percentage={developerScore.management} />
              Management
            </span>
            <span className="flex flex-row gap-4 pb-2 items-center">
              <ProgressRing percentage={developerScore.design} />
              Design
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
