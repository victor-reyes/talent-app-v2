"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DeveloperScore } from "../types";


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type Props = {
  developerScore: DeveloperScore
}

export function SpiderGraph({ developerScore }: Props) {
  const chartData = [
    { category: "Frontend", score: developerScore.frontend },
    { category: "Backend", score: developerScore.backend },
    { category: "Individual communication", score:developerScore.individualCommunication },
    { category: "Team collaboration", score: developerScore.teamCollaboration },
    { category: "Design", score: developerScore.design },
    { category: "Management", score: developerScore.management },
  ];  

  return (
    <CardContent className="">
      <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
        <RadarChart data={chartData} outerRadius="80%">
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarGrid stroke="#d3d3d3" />
          <PolarAngleAxis dataKey="category" stroke="#808080" />
          <Radar
            dataKey="score"
            stroke="#a9a9a9" 
            fill="#a9a9a9"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ChartContainer>
    </CardContent>
  );
}
