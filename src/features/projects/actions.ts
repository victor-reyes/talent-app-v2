"use server";

import { revalidatePath } from "next/cache";
import { projectService } from "./instance";



export async function addProjectAction(
  username: string,
  repository: string,
  title: string,
  description: string,
  performance: number
) {
  
  
  const project: ProjectData = {
    username,
    repository,
    title,
    description,
    performance,
  };

  await projectService.add(project);
  revalidatePath("/")
}


export type ProjectData = {
  username: string;
  repository: string;
  title: string;
  description: string;
  performance: number;
};