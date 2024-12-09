import { backgroundsSeed } from "@/features/backgrounds/seed/seed";
import { seedScores } from "@/features/scores/seed";
import { seedProjects } from "@/features/projects/db/seed";

(async () => {
  console.log("Start seeding...");
  await Promise.all([seedScores(), backgroundsSeed(), seedProjects()]);
  console.log("Done seeding...");
})();
