import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const developersTable = pgTable("developers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
  title: varchar().notNull(),
  shortBio: varchar().notNull(),
  languages: varchar().array().notNull(),
  educations: varchar().array().notNull(),
  skills: varchar().array().notNull(),
  links: varchar().array().notNull(),
});
