
import { Db } from "@/db";
import { scoresTable } from "./schema"
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getById(userId: number) {
      return db.select().from(scoresTable).where(eq(scoresTable.id, userId));
    },
  };
}
