"use server";

import { DeveloperInsert } from "@/db/schema";
import { developerInstance } from "./instance";

export  function addDeveloperAction(formData: FormData) {
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  const bio = formData.get("bio") as string;

  const developer: DeveloperInsert = {
    name,
    title,
    bio,
    languages: [],
    educations: [],
    skills: [],
    links: [],
  };

    developerInstance.addDeveloper(developer);
}
