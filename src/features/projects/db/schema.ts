import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { title } from "process";

export const projectTable = pgTable("project_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username").notNull(),
  repository: varchar("repository").notNull(),
  title: varchar("title").notNull(),
  pictureURL: varchar("url", { length: 500 }),
  description: varchar("description").notNull(),
  performance: varchar("performance").notNull(),
  commits: varchar("commits").notNull(),
  issues: varchar("issues").notNull(),
  userId: uuid("userId").notNull().defaultRandom(),
});

export type projectInsert = typeof projectTable.$inferInsert;
export type projectSelect = typeof projectTable.$inferSelect;
