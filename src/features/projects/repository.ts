import { Db } from "@/db";
import { projectInsert, projectTable } from "./db";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db.select().from(projectTable);
    },
    add: async (project: projectInsert) => {
      await db.insert(projectTable).values(project);
    },
    update: async (updatedProject: any) => {
      await db
        .update(projectTable)
        .set({
          description: updatedProject.description,
          title: updatedProject.title,
        })
        .where(eq(updatedProject.id, projectTable.id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
