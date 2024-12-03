"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Frontend", desktop: 94 },
  { month: "Backend", desktop: 92 },
  { month: "Charismatic", desktop: 62},
  { month: "Teamwork", desktop: 80},
  { month: "Design", desktop: 72 },
  { month: "Management", desktop: 80 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function SpiderGraph() {
  return (
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
  )
}
