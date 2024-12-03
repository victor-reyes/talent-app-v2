//import { DeveloperCard } from "@/components/ui/developer-card";
import { HeaderH2 } from "@/components/ui/header/header-h2";
import { AccordionBoard } from "@/features/scores/ui/accordion";
import { AverageScore } from "@/features/scores/ui/average-score";
import { SpiderGraph } from "@/features/scores/ui/spider-graph";



export default function Page(){
    return (
        <>
        <HeaderH2>
            Salt Scoring
        </HeaderH2>
        <AverageScore />
        <SpiderGraph/>
        <AccordionBoard />
        </>
)}