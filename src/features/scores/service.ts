import { User } from "./types";

export const createService = (user: User) => {



  return {
    getDeveloperScoreById: async () => {
      const programmingScore = (user.frontend + user.backend) / 2;
      const planningScore = (user.management + user.design) / 2;
      const communicationScore = (user.individualCommunication + user.teamCollaboration) / 2;
      const averageScore = Math.round((programmingScore + planningScore + communicationScore) / 3);

      return {
        frontend: Math.round(user.frontend),
        backend: Math.round(user.backend),
        individualCommunication: Math.round(user.individualCommunication),
        teamCollaboration: Math.round(user.teamCollaboration),
        design: Math.round(user.design),
        management: Math.round(user.management),
        programmingScore: Math.round(programmingScore),
        planningScore: Math.round(planningScore),
        communicationScore: Math.round(communicationScore),
        averageScore,
      }
    },
  }
}
