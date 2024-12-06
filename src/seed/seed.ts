import { seed } from "@/features/background/seed/seed";
import { seedScores } from "@/features/scores/seed";
import { seedProjects } from "@/features/projects/db/seed";

(async () => {
  console.log("Start seeding...");
  await Promise.all([seedScores(), seed(), seedProjects()]);
  console.log("Done seeding...");
})();
