import React from "react";
import { LevelRectangle } from "./level-rectangle";

type Props = {
  averageScore: number;
};

export function AverageScore({ averageScore }: Props) {
  return <LevelRectangle percentage={averageScore} />;
}
