import React from "react";

export default function ProjectDetails() {
  return (
    <div className="container mx-auto">
      <h3>Project Title:</h3>
      <div className="flex flex-row justify-between">
        <p>Commits:</p>
        <p>100</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Issues:</p>
        <p>5</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Duration:</p>
        <p>Two weeks</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Performance:</p>
        <p>20%</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Test:</p>
        <p>10</p>
      </div>
    </div>
  );
}
