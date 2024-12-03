import React from "react";
import ProjectDetails from "./project-details";
import { projectService } from "../instance";
import { HeaderH2 } from "@/components/ui/header/header-h2";

export async function ProjectCard() {
  const projects = await projectService.getAll();
  return (
    <div className="w-screen">
      <HeaderH2>Projects</HeaderH2>
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        {projects.map((project, index) => (
          <ProjectDetails key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
