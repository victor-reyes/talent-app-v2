import { Db } from "@/db";
import {
  DeveloperProfileInsert,
  developerProfiles,
  IdentityInsert,
  identities,
} from "./schema";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getIdentityById(id: number) {
      return await db.select().from(identities).where(eq(identities.id, id));
    },
    async getAllDeveloperProfiles() {
      return await db.select().from(developerProfiles).execute();
    },
    async addIdentity(identity: IdentityInsert) {
      return await db
        .insert(identities)
        .values(identity)
        .returning({ id: identities.id });
    },
    async addDeveloperProfile(developerProfile: DeveloperProfileInsert) {
      return await db.insert(developerProfiles).values(developerProfile);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
