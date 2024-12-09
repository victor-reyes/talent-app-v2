"use server";

import { revalidatePath } from "next/cache";
import { projectService } from "./instance";
import { ProjectData } from "./types";

export async function addProjectAction(project: ProjectData) {
  await projectService.add(project);
  revalidatePath("/");
}
