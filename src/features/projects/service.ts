import { Db } from "@/db";
import { createRepository } from "./repository";
import { projectInsert } from "./db";
// import { createClient } from "./api/api";
import { ProjectData } from "./types";

export function createService(db: Db) {
  const reps = createRepository(db);
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
      const commits = "120";
      const issues = "52";

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
    update: async (updatedProject: any) => {
      await reps.update(updatedProject);
    },
  };
}
