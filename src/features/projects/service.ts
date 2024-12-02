import { Db } from "./db/mockdb";
import { createProjectsRepository } from "./repository";

export async function createProjectService(db: Db) {
  const repository = await createProjectsRepository(db);
  return {
    async getAll() {
      return await repository.getAll();
    },
  };
}
