import { Separator, H2 } from "@/components";
import { projectService } from "../instance";
import AddProject from "./add-project";
import { EditButton } from "./edit-button";

export async function Projects() {
  const projects = await projectService.getAll();

  return (
    <div className="mt-4">
      <H2>Projects</H2>
      <div className="flex flex-col justify-center mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <EditButton project={project}/>
            <Separator className="mt-4 mb-6" />
          </div>
        ))}
      </div>
      <AddProject />
    </div>
  );
}
