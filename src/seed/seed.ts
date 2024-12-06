import { seed } from "@/features/background/seed/seed";
import { seedDeveloperScores } from "@/features/scores/seed";
import { seedProjects } from "@/features/projects/db/seed";

(async () => {
  console.log("Start seeding...");
  await Promise.all([seedDeveloperScores() /* seed() */]);
  seed();
  seedProjects();
  console.log("Done seeding...");
})();
