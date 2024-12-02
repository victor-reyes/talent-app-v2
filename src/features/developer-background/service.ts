import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getDevelopers() {
      return repository.getDevelopers();
    },
  };
}
