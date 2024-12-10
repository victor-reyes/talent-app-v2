import { pgEnum, pgTable, integer } from "drizzle-orm/pg-core";

export const role = pgEnum("role", [
  "pending",
  "developer",
  "client",
  "core",
  "admin",
]);

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: integer("clerk_id"),
  role: role().notNull(),
});
