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
          This repository hosts the final project from a coding bootcamp,
          showcasing a full-stack web application built to address a real-world
          problem. The project integrates a responsive front-end created with
          React or Next.js, a Node.js and Express back-end for server-side
          functionality, and a database like PostgreSQL or MongoDB for efficient
          data handling. It features user authentication, CRUD operations, and
          cloud deployment, reflecting modern development techniques and
          practical coding expertise
        </p>
      </button>
    </div>
  );
}
