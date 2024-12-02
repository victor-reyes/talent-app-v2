import { Db } from "./db/mockdb";

export function createProjectsRepository(db: Db) {
  return {
    async getAll() {
      return db;
    },
  };
}

export type Repository = ReturnType<typeof createProjectsRepository>;
