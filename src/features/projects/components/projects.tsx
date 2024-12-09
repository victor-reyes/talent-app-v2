import { H2 } from "@/components/ui/header/header-h2";
import { Separator } from "@/components/ui/separator";
import { projectService } from "../instance";
import AddProject from "./add-project";
import ProjectDetails from "./project-details";

export async function Projects() {
  const projects = await projectService.getAll();

  return (
    <div className="mt-4">
      <H2>Projects</H2>
      <div className="flex flex-col justify-center mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectDetails project={project} />
            <Separator className="mt-4 mb-6" />
          </div>
        ))}
      </div>
      <AddProject />
    </div>
  );
}
