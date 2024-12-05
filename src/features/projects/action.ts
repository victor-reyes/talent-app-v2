"use server";

import { projectInsert } from "./db/schema";
import { projectService } from "./instance";

export async function addProjectAction(
  username: string,
  repository: string,
  description: string,
  performance: string
) {
  const project: projectInsert = {
    username,
    repository,
    description,
    performance,
  };
  return await projectService.addProject(project);
}
