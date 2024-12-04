import { integer, pgTable } from "drizzle-orm/pg-core";

export const developersScoresTable = pgTable("developersScores", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  frontend: integer().notNull(),
  backend: integer().notNull(),
  individualCommunication: integer().notNull(),
  teamCollaboration: integer().notNull(),
  design: integer().notNull(),
  management: integer().notNull()
});

