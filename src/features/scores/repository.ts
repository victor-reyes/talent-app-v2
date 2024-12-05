
import { Db } from "@/db";
import { developersScoresTable } from "./schema"

export function createRepository(db: Db) {
  return {
    async getById() {
      return db.select().from(developersScoresTable);
    },
  };
}
