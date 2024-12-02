import { db } from "@/db";
import { developersTable } from "@/db/schema";

export function createRepository() {
  return {
    async getDevelopers() {
      return db.select().from(developersTable);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
