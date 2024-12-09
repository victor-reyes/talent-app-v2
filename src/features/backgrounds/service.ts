import { Repository } from "./repository";
import { BackgroundInsert, BackgroundUpdate } from "./schema";

export function createBackgroundsService(repository: Repository) {
  return {
    async getAll() {
      return repository.getAll();
    },
    async getById(id: number) {
      return repository.getById(id);
    },

    async add(background: BackgroundInsert) {
      await repository.add(background);
    },
    async update(background: BackgroundUpdate) {
      await repository.update(background);
    },
  };
}
