"use server";

import { projectInsert } from "./db/schema";
import { projectService } from "./instance";

export async function addProjectAction(
  username: string,
  repository: string,
  description: string,
  performance: string,
  commits: string,
  issues: string
) {
  const project: projectInsert = {
    username,
    repository,
    description,
    performance,
    commits,
    issues,
  };
  return await projectService.addProject(project);
}
