import React from "react";
import { ProgressRing } from "./progress-ring";

export function AverageScore() { 
  const percentage = Math.floor(Math.random() * 100);  

  return (
    <ProgressRing percentage={percentage} />
  );
}
