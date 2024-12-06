import { seed } from "@/features/background/seed/seed";
import { seedDeveloperScores } from "@/features/scores/seed";

(async () => {

    console.log("Start seeding...");
    await Promise.all([seedDeveloperScores(), /* seed() */]);
    console.log("Done seeding...");

})();