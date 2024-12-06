"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { CompleteScores } from "../types";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type Props = {
  scores: CompleteScores;
};

export function SpiderGraph({ scores: scores }: Props) {
  const chartData = [
    { category: "Frontend", score: scores.frontend },
    { category: "Backend", score: scores.backend },
    {
      category: "Conversation",
      score: scores.individualCommunication,
    },
    { category: "Team collaboration", score: scores.teamCollaboration },
    { category: "Design", score: scores.design },
    { category: "Management", score: scores.management },
  ];

  return (
    <CardContent className="">
      <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
        <RadarChart data={chartData} outerRadius="80%">
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarGrid stroke="#d3d3d3" />
          <PolarAngleAxis
            dataKey="category"
            stroke="#808080"
            tick={{
              dy: 5,
              fill: "#808080",
            }}
            tickLine={false}
          />
          <Radar
            dataKey="score"
            stroke="#6b7280"
            fill="#6b7280"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ChartContainer>
    </CardContent>
  );
}
