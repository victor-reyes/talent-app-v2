import { scoresService } from "./instance";

export const seedDeveloperScores = async () => {
    const newDeveloperScore = {
        frontend: Math.round(Math.random() * 100),
        backend: Math.round(Math.random() * 100),
        individualCommunication: Math.round(Math.random() * 100),
        teamCollaboration: Math.round(Math.random() * 100),
        design: Math.round(Math.random() * 100),
        management: Math.round(Math.random() * 100),
    };
    
    try {
        await scoresService.addDeveloperScores(newDeveloperScore);
    } catch (error) {
        console.log("Something went wrong when seeding scores " + error);
    }
    console.log("Done seeding scores...");
};
