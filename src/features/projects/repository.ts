import { Db } from "@/db";
import { projectInsert, projectTable } from "./db/schema";

export function createProjectsRepository(db: Db) {
  return {
    getAll: async () => {
      return [];
    },
    addProject: async (project: projectInsert) => {
      await db.insert(projectTable).values(project);
    },
  };
}

export type Repository = ReturnType<typeof createProjectsRepository>;
