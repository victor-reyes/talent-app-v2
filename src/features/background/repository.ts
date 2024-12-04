import { db } from "@/db";
import { eq } from "drizzle-orm";
import { backgroundsTable, BackgroundInsert, BackgroundSelect } from "./schema";

export function createRepository() {
  return {
    async get() {
      return db.select().from(backgroundsTable);
    },
    async add(background: BackgroundInsert) {
      return db.insert(backgroundsTable).values({ ...background });
    },
    async update(background: BackgroundSelect) {
      return db
        .update(backgroundsTable)
        .set({ ...background })
        .where(eq(backgroundsTable.id, background.id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
