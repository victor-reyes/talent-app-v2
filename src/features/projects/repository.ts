import { Db } from "@/db";
import { ProjectInsert, projects } from "./db";
import { eq } from "drizzle-orm";
import { UpdatedProject } from "./types";

export function createRepository(db: Db) {
  return {
    async getAll(userId: string) {
      return db.select().from(projects).where(eq(projects.userId, userId));
    },
    add: async (project: ProjectInsert) => {
      await db.insert(projects).values(project);
    },
    update: async (updatedProject: UpdatedProject) => {
      await db
        .update(projects)
        .set({
          description: updatedProject.description,
        })
        .where(eq(projects.id, updatedProject.id));
    },
    delete: async (id: string) => {
      await db.delete(projects).where(eq(projects.id, id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
