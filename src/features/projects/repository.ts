import { Db } from "@/db";

export function createProjectsRepository(db: Db) {
  return {
    async getAll() {
      return db.select.from();
    },
  };
}

export type Repository = ReturnType<typeof createProjectsRepository>;
