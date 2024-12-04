"use server";

import { backgroundsService } from "./instance";
import { BackgroundInsert } from "./schema";

export async function addBackgroundAction(formData: FormData) {
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  const bio = formData.get("bio") as string;

  const background: BackgroundInsert = {
    name,
    title,
    bio,
    languages: [],
    educations: [],
    skills: [],
    links: [],
  };

  await backgroundsService.add(background);
}

export async function updateBackgroundAction(formData: FormData) {
  await backgroundsService.update(formData);
}
