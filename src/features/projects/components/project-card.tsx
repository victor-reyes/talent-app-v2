import React from "react";
import ProjectDetails from "./project-details";
import { projectService } from "../instance";
import { getTotalOfCommits } from "../api/api";

export async function ProjectCard() {
  const projects = await projectService.getAll();
  const data = await getTotalOfCommits();
  console.log({ data });
  return (
    <div>
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <ProjectDetails key={index} project={project} />
      ))}
    </div>
  );
}
