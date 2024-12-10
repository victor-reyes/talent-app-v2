import { hasAccess } from "./privileges";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getUserById(id: number) {
      return hasAccess() ? await repository.getUserById(id) : "Access denied";
    },
  };
}
