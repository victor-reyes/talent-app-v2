import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const repository = pgTable("repository", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username").notNull(),
  repository: varchar("repository").notNull(),
  pictureURL: varchar("url", { length: 500 }),
  description: varchar("description").notNull(),
  userId: uuid("userId").notNull().defaultRandom(),
});
