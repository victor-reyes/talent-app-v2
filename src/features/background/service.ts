import { Repository } from "./repository";
import { BackgroundInsert } from "./schema";

export function createService(repository: Repository) {
  return {
    async get() {
      return repository.get();
    },

    async add(background: BackgroundInsert) {
      await repository.add(background);
    },
    async update(formData: FormData) {
      const id = formData.get("userId") as string;
      const name = formData.get("name") as string;
      const title = formData.get("title") as string;
      const bio = formData.get("bio") as string;
      await repository.update({ id, name, title, bio });
    },
  };
}
