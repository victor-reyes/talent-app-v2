import { Db } from "@/db";
import { developers, users } from "./schema";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getUserById(id: number) {
      return await db.select().from(users).where(eq(users.id, id));
    },
    async getAllDevelopers() {
      return await db.select().from(developers).execute();
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
