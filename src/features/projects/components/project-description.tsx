"use client";
import { useState } from "react";

type Props = {
  description: string;
};

export function ProjectDescription({ description }: Props) {
  const [isExpanded, setIsExpanded] = useState(true);
  function toggleText() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div>
      <button onClick={toggleText}>
        <p
          className={`mt-2 mx-2 text-justify ${
            isExpanded ? "line-clamp-4" : "line-clamp-none"
          } overflow-hidden`}
        >
          {description}
        </p>
      </button>
    </div>
  );
}
