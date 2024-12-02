import { Db } from "./db/mockdb";

export async function createProjectsRepository(db: Db) {
  return {
    async getAll() {
      return db;
    },
  };
}

export type Repository = ReturnType<typeof createProjectsRepository>;
