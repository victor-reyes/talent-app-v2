import { HeaderH2 } from "@/components/ui/header/header-h2";
import { Separator } from "@/components/ui/separator";
import { projectService } from "../instance";
import ProjectDetails from "./project-details";
import AddProject from "./add-project";

export async function ProjectCard() {
  const projects = await projectService.getAll();

  return (
    <div className="mt-4">
      <HeaderH2>Projects</HeaderH2>
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
