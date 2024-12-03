import React from "react";
import ProjectDetails from "./project-details";
import { projectService } from "../instance";
// import { getTotalOfCommits } from "../api/api";
import { HeaderH2 } from "@/components/ui/header/header-h2";

export async function ProjectCard() {
  const projects = await projectService.getAll();
  // const data = await getTotalOfCommits();
  // console.log({ data });
  return (
    <div>
      <HeaderH2>Projects</HeaderH2>
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
      {projects.map((project, index) => (
        <ProjectDetails key={index} project={project} />
      ))}
      </div>
    </div>
  );
}
