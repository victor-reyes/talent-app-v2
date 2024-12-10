import { pgEnum, pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const roles = pgEnum("roles", [
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

export const identities = pgTable("identities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: integer("clerk_id"),
  roles: roles().notNull().default("pending"),
});

export const developerProfiles = pgTable("developer_profiles", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id")
    .notNull()
    .references(() => identities.id),
  name: varchar().notNull(),
  email: varchar().notNull(),
  status: developersStatus().notNull().default("unpublished"),
});

export type IdentititySelect = typeof identities.$inferSelect;
export type IdentityInsert = typeof identities.$inferInsert;

export type DeveloperProfileSelect = typeof developerProfiles.$inferSelect;
export type DeveloperProfileInsert = typeof developerProfiles.$inferInsert;
