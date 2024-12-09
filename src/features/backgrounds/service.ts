import { Repository } from "./repository";
import { BackgroundInsert } from "./schema";

export function createBackgroundsService(repository: Repository) {
  return {
    async getAll() {
      return repository.getAll();
    },
    async getById(id: number) {
      return repository.getById(id);
    },

    async add(formData: FormData) {
      const name = formData.get("name") as string;
      const title = formData.get("title") as string;
      const bio = formData.get("bio") as string;
      await repository.add({ name, title, bio } as BackgroundInsert);
    },
    async update(formData: FormData) {
      const id = Number(formData.get("userId"));
      const name = formData.get("name") as string;
      const title = formData.get("title") as string;
      const bio = formData.get("bio") as string;
      const avatarUrl = formData.get("avatarUrl") as string;
      await repository.update({
        id,
        avatarUrl,
        name,
        title,
        bio,
        languages: [],
        educations: [],
        skills: [],
        links: [],
      });
    },
  };
}
