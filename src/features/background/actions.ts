"use server";

import { backgroundsService } from "./instance";

export async function addBackgroundAction(formData: FormData) {
  await backgroundsService.add(formData);
}

export async function updateBackgroundAction(formData: FormData) {
  await backgroundsService.update(formData);
}
