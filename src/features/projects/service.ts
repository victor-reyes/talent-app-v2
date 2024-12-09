import { Db } from "@/db";
import { createProjectsRepository } from "./repository";
import { projectInsert } from "./db/schema";
// import { createClient } from "./api/api";
import { ProjectData } from "./actions";

export function createProjectService(db: Db) {
  const reps = createProjectsRepository(db);
  return {
    getAll: async () => {
      return await reps.getAll();
    },
    add: async ({
      username,
      repository,
      title,
      description,
      performance,
    }: ProjectData) => {
      //const client = createClient();
      //const commits = await client.getTotalOfCommits(username, title);
      //const issuesArr = await client.getAllIssues(username, title);
      const commits = "120"
      const issues = "52"
      
      const newProject: projectInsert = {
        username,
        repository,
        title,
        performance,
        description,
        issues,
        commits,
      };

      await reps.add(newProject);
    },
  };
}
