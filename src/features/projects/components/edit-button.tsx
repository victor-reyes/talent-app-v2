"use client";
import { useState } from "react";
import ProjectDetails from "./project-details";
import EditProjectDetails from "./edit-project-details";
import { Project } from "../types";

type Props = {
  project: Project;
};
export function EditButton({ project }: Props) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <>
      {showDetails ? (
        <ProjectDetails project={project} setShowDetails={setShowDetails}/>
      ) : (
        <EditProjectDetails project={project} setShowDetails={setShowDetails}/>
      )}
    </>
  );
}
