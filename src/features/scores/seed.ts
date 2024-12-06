import { scoresService } from "./instance";

const seedDeveloperScores = async () => {

    const newDeveloperScore = {
        frontend: Math.floor(Math.random() * 101),
        backend: Math.floor(Math.random() * 101),
        individualCommunication: Math.floor(Math.random() * 101),
        teamCollaboration: Math.floor(Math.random() * 101),
        design: Math.floor(Math.random() * 101),
        management: Math.floor(Math.random() * 101),
    };

    await scoresService.addDeveloperScores(newDeveloperScore);
};

(async () => {

    await seedDeveloperScores();
    console.log("Seeding...");

})();
