import { Db } from "@/db";
import { DeveloperInsert, developers, UserInsert, users } from "./schema";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getUserById(id: number) {
      return await db.select().from(users).where(eq(users.id, id));
    },
    async getAllDevelopers() {
      return await db.select().from(developers).execute();
    },
    async addUser(user: UserInsert) {
      return await db.insert(users).values(user);
    },
    async addDeveloper(developer: DeveloperInsert) {
      return await db.insert(developers).values(developer);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
