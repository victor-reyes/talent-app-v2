import { hasAccess } from "./privileges";
import { Repository } from "./repository";
import { DeveloperInsert, UserInsert } from "./schema";

export function createService(repository: Repository) {
  return {
    async getUserById(id: number) {
      return hasAccess() ? await repository.getUserById(id) : "Access denied";
    },
    async getAllDevelopers() {
      return hasAccess()
        ? await repository.getAllDevelopers()
        : "Access denied";
    },
    async addUser(user: UserInsert) {
      return hasAccess() ? await repository.addUser(user) : "Access denied";
    },
    async addDeveloper(developer: DeveloperInsert) {
      return hasAccess()
        ? await repository.addDeveloper(developer)
        : "Access denied";
    },
  };
}
