import { Db } from "@/db";
import { projectInsert, projectTable } from "./db";
import { eq } from "drizzle-orm";
import { UpdatedProject } from "./types";

export function createRepository(db: Db) {
  return {
    async getAll() {
      return db.select().from(projectTable);
    },
    add: async (project: projectInsert) => {
      await db.insert(projectTable).values(project);
    },
    update: async (updatedProject: UpdatedProject) => {
      await db
        .update(projectTable)
        .set({
          description: updatedProject.description,
          title: updatedProject.title,
        })
        .where(eq(updatedProject.id, projectTable.id));
    },
    delete: async (id: string) => {
      await db.delete(projectTable).where(eq(projectTable.id, id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
