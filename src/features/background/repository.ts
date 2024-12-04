import { db } from "@/db";
import {
  DeveloperInsert,
  DeveloperSelect,
  developersTable,
} from "@/features/background/schema";
import { eq } from "drizzle-orm";

export function createRepository() {
  return {
    async getDevelopers() {
      return db.select().from(developersTable);
    },
    async addDeveloper(developer: DeveloperInsert) {
      return db.insert(developersTable).values({ ...developer });
    },
    async updateDeveloper(developer: DeveloperSelect) {
      return db
        .update(developersTable)
        .set({ ...developer })
        .where(eq(developersTable.id, developer.id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
