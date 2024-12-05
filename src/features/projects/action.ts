"use server";

import { projectInsert } from "./db/schema";
import { projectService } from "./instance";

export async function addProjectAction(
  username: string,
  repository: string,
  description: string
) {
  const project: projectInsert = {
    username,
    repository,
    description,
  };
  return await projectService.addProject(project);
}
