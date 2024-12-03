import { db } from "@/db";
import { DeveloperInsert, developersTable } from "@/features/background/schema";

export function createRepository() {
  return {
    async getDevelopers() {
      return db.select().from(developersTable);
    },
    async addDeveloper(developer: DeveloperInsert) {
      return db.insert(developersTable).values({ ...developer });
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
