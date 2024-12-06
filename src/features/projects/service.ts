import { Db } from "@/db";
import { createProjectsRepository } from "./repository";
import { projectInsert } from "./db/schema";

export function createProjectService(db: Db) {
  const repository = createProjectsRepository(db);
  return {
    getAll: async () => {
      return await repository.getAll();
    },
    addProject: async (project: projectInsert) => {
      await repository.addProject(project);
    },
  };
}
