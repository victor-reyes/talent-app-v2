"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
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

const chartData = [
  { category: "Frontend", score: 94 },
  { category: "Backend", score: 92 },
  { category: "Charismatic", score: 62 },
  { category: "Teamwork", score: 80 },
  { category: "Design", score: 72 },
  { category: "Management", score: 80 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function SpiderGraph() {
  return (
    <CardContent className="pb-0">
      <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
        <RadarChart data={chartData} outerRadius="80%">
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            dataKey="score"
            stroke="var(--color-desktop)"
            fill="var(--color-desktop)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ChartContainer>
    </CardContent>
  );
}
