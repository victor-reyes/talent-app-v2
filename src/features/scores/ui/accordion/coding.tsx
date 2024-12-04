import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ProgressRing } from "../progress-ring"

export function Coding() {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>
        <ProgressRing percentage={100}/>
        Coding
        </AccordionTrigger>
        <AccordionContent>
          Coding data
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
