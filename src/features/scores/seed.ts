import { scoresService } from "./instance";

export const seedDeveloperScores = async () => {
    const newDeveloperScore = {
        frontend: Math.floor(Math.random() * 101),
        backend: Math.floor(Math.random() * 101),
        individualCommunication: Math.floor(Math.random() * 101),
        teamCollaboration: Math.floor(Math.random() * 101),
        design: Math.floor(Math.random() * 101),
        management: Math.floor(Math.random() * 101),
    };


    try {
        await scoresService.addDeveloperScores(newDeveloperScore);
    } catch (error) {
        console.log("Something went wrong when seeding scores " + error);
    }
    console.log("Done seeding scores...");
};
