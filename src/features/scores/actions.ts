"use server";
import { scoresService } from "./instance";

export async function updateScoresAction(formData: FormData) {
  const individualCommunication = formData.get(
    "individualCommunication"
  ) as string;
  const title = formData.get("title") as string;
  const comment = formData.get("comment") as string;
  const teamCollaboration = formData.get("teamCollaboration") as string;
  const management = formData.get("management") as string;
  const design = formData.get("design") as string;
  const backend = formData.get("backend") as string;
  const frontend = formData.get("frontend") as string;
console.log(comment)
  const newScores = {
    frontend: Number(frontend),
    backend: Number(backend),
    individualCommunication: Number(individualCommunication),
    teamCollaboration: Number(teamCollaboration),
    design: Number(design),
    management: Number(management),
  };

  scoresService.updateScores(2, newScores);
}
