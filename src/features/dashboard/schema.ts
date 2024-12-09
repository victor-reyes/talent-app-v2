import { pgEnum, pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const role = pgEnum("role", ["client", "salty", "core", "admin"]);

export const users = pgTable("users", {
  clerkId: integer("clerk_id").primaryKey(),
  role: role().notNull(),
  name: varchar().notNull(),
});
