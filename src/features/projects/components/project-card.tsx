import React from "react";
import ProjectDetails from "./project-details";
import { projectService } from "../instance";
import { HeaderH2 } from "@/components/ui/header/header-h2";
import { Separator } from "@/components/ui/separator";

export async function ProjectCard() {
  const projects = await projectService.getAll();
  return (
    <div className="mt-4">
      <HeaderH2>Projects</HeaderH2>
      <div className="flex flex-col justify-center mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectDetails project={project} />
            <Separator className="my-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
