import { Db } from "@/db";
import { scoresTable } from "./schema";
import { eq } from "drizzle-orm";
import { NewScores } from "./types";

export function createRepository(db: Db) {
  return {
    async getById(userId: number) {
      return await db.select().from(scoresTable).where(eq(scoresTable.id, userId));
    },
    async updateScore(userId: number, newScores: NewScores) {
      await db.update(scoresTable)
        .set(newScores)
        .where(eq(scoresTable.id, userId));
    },
    async addScore(newScores: NewScores) {
      await db.insert(scoresTable).values(newScores);
    },
  };
}
