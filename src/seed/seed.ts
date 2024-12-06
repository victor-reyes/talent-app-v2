import { seed } from "@/features/background/seed/seed";
import { seedScores } from "@/features/scores/seed";

(async () => {

    console.log("Start seeding...");
    await Promise.all([seedScores(), /* seed() */]);
    console.log("Done seeding...");

})();