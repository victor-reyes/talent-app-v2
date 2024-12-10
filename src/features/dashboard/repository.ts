import { Db } from "@/db";
import { users } from "./schema";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getUserById(id: number) {
      return db.select().from(users).where(eq(users.id, id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
