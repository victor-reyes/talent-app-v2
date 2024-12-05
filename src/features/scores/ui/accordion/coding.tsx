import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ProgressRing } from "../progress-ring"
import { CompleteDeveloperScore } from "../../types"

type Props = {
  developerScore: CompleteDeveloperScore
}

export function Coding({ developerScore } : Props) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-96">
      <AccordionItem value="item-1">
      <AccordionTrigger>
        <ProgressRing percentage={developerScore.programmingScore}/>
        Programming
        </AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col mr-2 pl-8">
        <span className="flex flex-row gap-4 pb-2 items-center">
        <ProgressRing percentage={developerScore.backend}/>
        Backend
        </span>
        <span className="flex flex-row gap-4 pb-2 items-center">
        <ProgressRing percentage={developerScore.frontend}/>
        Frontend
        </span>
        </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
