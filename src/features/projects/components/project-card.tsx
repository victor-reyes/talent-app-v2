import React from "react";
import ProjectDetails from "./project-details";
import { projectService } from "../instance";

export async function ProjectCard() {
  const projects = await projectService.getAll();
  return (
    <div>
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <ProjectDetails key={index} project={project} />
      ))}
    </div>
  );
}
