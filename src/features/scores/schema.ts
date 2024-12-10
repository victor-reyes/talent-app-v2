import { integer, pgTable, varchar} from "drizzle-orm/pg-core";


export const scoresTable = pgTable("scores", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  frontend: integer().notNull(),
  backend: integer().notNull(),
  individualCommunication: integer().notNull(),
  teamCollaboration: integer().notNull(),
  design: integer().notNull(),
  management: integer().notNull(),
});

export const assignmentTable = pgTable("score_assigments",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar().notNull(),
  comment: varchar(),
  score: integer(),
  tags: varchar().array(),
  //userId: integer().notNull()
});