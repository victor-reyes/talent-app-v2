import { Db } from "@/db";
import { projectInsert, projectTable } from "./db";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db.select().from(projectTable);
    },
    add: async (project: projectInsert) => {
      await db.insert(projectTable).values(project);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
