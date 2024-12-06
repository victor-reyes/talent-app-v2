import { Db } from "@/db";
import { scoresTable } from "./schema";
import { eq } from "drizzle-orm";
import { NewDeveloperScores } from "./types";

export function createRepository(db: Db) {
  return {
    async getById(userId: number) {
      return await db.select().from(scoresTable).where(eq(scoresTable.id, userId));
    },
    async updateScore(userId: number, newDeveloperScores: NewDeveloperScores) {
      await db.update(scoresTable)
        .set(newDeveloperScores)
        .where(eq(scoresTable.id, userId));
    },
    async addScore(newDeveloperScores: NewDeveloperScores) {
      console.log(newDeveloperScores)
      await db.insert(scoresTable).values(newDeveloperScores);
    },
  };
}
