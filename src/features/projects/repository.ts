import { Db } from "@/db";
import { projectInsert, projectTable } from "./db/schema";

export function createProjectsRepository(db: Db) {
  return {
    async getAll() {
      return db.select().from(projectTable);
    },
    addProject: async (project: projectInsert) => {
      await db.insert(projectTable).values(project);
    },
  };
}

export type Repository = ReturnType<typeof createProjectsRepository>;
 