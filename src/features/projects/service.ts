import { Db } from "./db/mockdb";
import { createProjectsRepository } from "./repository";

export function createProjectService(db: Db) {
  const repository = createProjectsRepository(db);
  return {
    async getAll() {
      return await repository.getAll();
    },
  };
}
