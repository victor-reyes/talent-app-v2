"use client";
import ProjectDetails from "./project-details";
import { useState } from "react";
import EditProjectDetails from "./edit-project-details";
import { Project } from "../types";

type Props = {
  project: Project;
};
export function ProjectState({ project }: Props) {
  const [editDetails, setEditDetails] = useState(true);
  if (!editDetails) {
    return (
      <EditProjectDetails setEditDetails={setEditDetails} project={project} />
    );
  }
  return (
    <>
      <ProjectDetails setEditDetails={setEditDetails} project={project} />
    </>
  );
}
