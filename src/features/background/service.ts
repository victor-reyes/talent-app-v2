import { DeveloperInsert } from "@/features/background/schema";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getDevelopers() {
      return repository.getDevelopers();
    },

    async addDeveloper(developer: DeveloperInsert) {
      await repository.addDeveloper(developer);
    },
    async updateDeveloper(formData: FormData) {
      const id = formData.get("userId") as string;
      const name = formData.get("name") as string;
      const title = formData.get("title") as string;
      const bio = formData.get("bio") as string;
      await repository.updateDeveloper(developer);
    },
  };
}
