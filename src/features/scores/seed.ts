import { title } from "process";
import { scoresService } from "./instance";

export const seedScores = async () => {
    const newScore = {
        frontend: Math.round(Math.random() * 100),
        backend: Math.round(Math.random() * 100),
        individualCommunication: Math.round(Math.random() * 100),
        teamCollaboration: Math.round(Math.random() * 100),
        design: Math.round(Math.random() * 100),
        management: Math.round(Math.random() * 100),
    };
    
    
    try {
        await scoresService.addScores(newScore);
    } catch (error) {
        console.error("Something went wrong when seeding scores " + error);
    }
};

export const seedAssignments = async () => {
    const newAssignment = {
        userId: 1,
        title: "tdd-event-sourcing",
        comment: "Hej Hej",
        score: Math.round(Math.random() * 100),
        tags: ["frontend", "backend", "individualCommunication", "teamCollaboration", "design", "management",]
    };
    try {
        await scoresService.addAssignment(newAssignment);
    } catch (error) {
        console.error("Something went wrong when seeding assigments " + error);
    }
}

seedAssignments()