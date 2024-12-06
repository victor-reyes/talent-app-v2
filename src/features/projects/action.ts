"use server";

import { createClient } from "./api/api";
import { projectInsert } from "./db/schema";
import { projectService } from "./instance";

export async function addProjectAction(
  username: string,
  repository: string,
  title: string,
  description: string,
  performance: string
) {
  const client = createClient();
  const commits = await client.getTotalOfCommits(username, repository);
  const issues = await client.getAllIssues(username, repository);
  const project: projectInsert = {
    username,
    repository,
    title,
    description,
    performance,
    commits,
    issues: issues,
  };

  return await projectService.addProject(project);
}
