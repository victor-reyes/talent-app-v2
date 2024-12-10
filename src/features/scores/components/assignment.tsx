import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components";
import { ProgressRing } from "./progress-ring";

  
  
  export function Assignment() {
    return (
      <Accordion type="single" collapsible className="mx-auto max-w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <ProgressRing percentage={100} />
            Title of assignemnt
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col mr-2 pl-8">
              <span className="flex flex-row gap-4 pb-2 items-center">
                Comments
              </span>
              <span className="flex flex-row gap-4 pb-2 items-center">
                Tags
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  