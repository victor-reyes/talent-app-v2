import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { ProgressRing } from "./progress-ring";
import { Assignment as AssignmentType } from "../types";

type Props = {
  assignment: AssignmentType;
};

export function Assignment({ assignment }: Props) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <ProgressRing percentage={100} />
          {assignment.title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col mr-2 pl-8">
            <span className="flex flex-row gap-4 pb-2 items-center">
              {assignment.comment}
            </span>
            <span className="flex flex-row gap-4 pb-2 items-center">
              {assignment.tags}
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
