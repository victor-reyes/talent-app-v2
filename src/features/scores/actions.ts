"use server";
import { scoresService } from "./instance";

export async function updateScoresAction(formData: FormData) {
  const individualCommunication = formData.get(
    "individualCommunication"
  ) as string;
  const teamCollaboration = formData.get("teamCollaboration") as string;
  const management = formData.get("management") as string;
  const design = formData.get("design") as string;
  const backend = formData.get("backend") as string;
  const frontend = formData.get("frontend") as string;

  const newScores = {
    frontend: Number(frontend),
    backend: Number(backend),
    individualCommunication: Number(individualCommunication),
    teamCollaboration: Number(teamCollaboration),
    design: Number(design),
    management: Number(management),
  };

  scoresService.patchScores(2, newScores);
}
