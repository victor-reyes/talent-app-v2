import { pgEnum, pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const role = pgEnum("role", [
  "pending",
  "developer",
  "client",
  "core",
  "admin",
]);

export const developersStatus = pgEnum("developers_status", [
  "unpublished",
  "published",
  "highlighted",
]);

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: integer("clerk_id"),
  role: role().notNull(),
});

export const developers = pgTable("developers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  name: varchar().notNull(),
  email: varchar().notNull(),
  status: developersStatus().notNull().default("unpublished"),
});

export type UserSelect = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;

export type DeveloperSelect = typeof developers.$inferSelect;
export type DeveloperInsert = typeof developers.$inferInsert;
