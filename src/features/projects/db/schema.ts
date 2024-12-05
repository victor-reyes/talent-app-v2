import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const projectTable = pgTable("project_table", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: varchar("username").notNull(),
  repository: varchar("repository").notNull(),
  pictureURL: varchar("url", { length: 500 }),
  description: varchar("description").notNull(),
  userId: uuid("userId").notNull().defaultRandom(),
});

export type projectInsert = typeof projectTable.$inferInsert;
export type projectSelect = typeof projectTable.$inferSelect;
