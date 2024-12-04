"use client";
import { useState } from "react";
export function ProjectDescription() {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          debitis sunt illo ex maiores error eos nostrum atque quasi sequi
          tempore molestiae optio dolore facere aliquam, totam sint sed iste?
        </p>
      </button>
    </div>
  );
}
