import { getAllIssues, getDuration, getTotalOfCommits } from "./api/api";
import { Db } from "./db/mockdb";
import { createProjectsRepository } from "./repository";

export function createProjectService(db: Db) {
  const repository = createProjectsRepository(db);
  return {
    async getAll() {
      return await repository.getAll();
    },
    async getRepositoryInformation(user: string, repo: string) {
      const commits = await getTotalOfCommits(user, repo);
      const issues = await getAllIssues(user, repo);
      const duration = await getDuration(user, repo);
      return {
        commits: commits,
        issues: issues.length,
        duration: duration,
      };
    },
  };
}
