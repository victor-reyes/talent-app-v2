import { Developer } from "./types";

export const createService = (developer: Developer) => {

  return {
    getDeveloperScoreById: async () => {
      const programmingScore = (developer.frontend + developer.backend) / 2;
      const planningScore = (developer.management + developer.design) / 2;
      const communicationScore = (developer.individualCommunication + developer.teamCollaboration) / 2;
      const averageScore = Math.round((programmingScore + planningScore + communicationScore) / 3);

      return {
        frontend: Math.round(developer.frontend),
        backend: Math.round(developer.backend),
        individualCommunication: Math.round(developer.individualCommunication),
        teamCollaboration: Math.round(developer.teamCollaboration),
        design: Math.round(developer.design),
        management: Math.round(developer.management),
        programmingScore: Math.round(programmingScore),
        planningScore: Math.round(planningScore),
        communicationScore: Math.round(communicationScore),
        averageScore,
      }
    },
  }
}
