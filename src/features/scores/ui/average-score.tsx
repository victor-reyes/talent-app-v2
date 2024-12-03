import React from "react";
import { LevelRectangle } from "./level-rectangle";

export function AverageScore() { 
  const percentage = Math.floor(Math.random() * 100);  

  return (
    <LevelRectangle percentage={percentage} />
  );
}
