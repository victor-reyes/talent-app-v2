import { Db } from "@/db";
import { createClient } from "./api/api";
import { createProjectsRepository } from "./repository";
import { projectInsert } from "./db/schema";

export function createProjectService(db: Db) {
  const client = createClient();
  const repository = createProjectsRepository(db);
  return {
    async getAll() {
      return await repository.getAll();
    },
    async getRepositoryInformation(user: string, repo: string) {
      const commits = await client.getTotalOfCommits(user, repo);
      const issues = await client.getAllIssues(user, repo);
      const lastCommit = await client.getDuration(user, repo);
      return {
        commits: commits,
        issues: issues.length,
        lastCommit: lastCommit,
      };
    },
    async addProject(project: projectInsert) {
      await repository.addProject(project);
    },
  };
}
