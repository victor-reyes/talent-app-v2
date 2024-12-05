"use client"
import ProjectDetails from "./project-details";
import { useState } from "react";
import EditProjectDetails from "./edit-project-details";
import { Project } from "../types";

type Props = {
  project: Project;
};
export function ProjectState({project}: Props){
 const [showDetails, setShowDetails] = useState(true)
 if(!showDetails){
  return <EditProjectDetails setShowDetails={setShowDetails} project={project}/>;
 }
 return (
   <>
     <ProjectDetails setShowDetails={setShowDetails} project={project} />
   </>
 );
}