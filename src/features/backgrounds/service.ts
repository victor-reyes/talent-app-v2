import { Repository } from "./repository";
import { BackgroundInsert, BackgroundSelect } from "./schema";

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
    async update(background: BackgroundSelect) {
      await repository.update(background);
    },
  };
}
