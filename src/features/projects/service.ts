import { Db } from "@/db";
import { createRepository } from "./repository";
import { projectInsert } from "./db";
import { createClient } from "./api/api";
import { ProjectData, UpdatedProject } from "./types";
import { extractRepositoryDetails } from "./logic";

export function createService(db: Db) {
  const reps = createRepository(db);
  const client = createClient();
  return {
    getAll: async () => {
      return await reps.getAll();
    },
    add: async ({
      repository,
      description,
      projectWebsite,
    }: ProjectData) => {
      //const commits = await client.getTotalOfCommits(username, title);
      //const issuesArr = await client.getAllIssues(username, title);
      // const images = "image.png";
      const commits = "120";
      const issues = "52";
      console.log(projectWebsite)
      const performance = await client.testPagePerformance(projectWebsite);

      const { username, title } = extractRepositoryDetails(repository);

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
    update: async (updatedProject: UpdatedProject) => {
      await reps.update(updatedProject);
    },
    delete: async (id: string) => {
      await reps.delete(id);
    },
  };
}
