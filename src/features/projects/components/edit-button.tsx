"use client";
import { Pencil } from "lucide-react";
import { useState } from "react";
import ProjectDetails from "./project-details";
import EditProjectDetails from "./edit-project-details";
import { Project } from "../types";

type Props = {
  project: Project;
};
export function EditButton({ project }: Props) {
  const [showDetails, setShowDetails] = useState(true);

  function toggleEdit() {
    setShowDetails(!showDetails);
  }

  return (
    <>
      <button onClick={toggleEdit}>
        <Pencil className="mr-4" size={16} />
      </button>
      {showDetails ? (
        <ProjectDetails project={project} />
      ) : (
        <EditProjectDetails project={project} />
      )}
    </>
  );
}
