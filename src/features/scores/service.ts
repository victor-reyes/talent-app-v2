import { User } from "./types";

export const createService = (user: User) => {
  return {
    getDeveloperScoreById: async () => {
      const programmingScore = (user.frontend + user.backend) / 2;
      const planningScore = (user.management + user.design) / 2;
      const communicationScore = (user.individualCommunication + user.teamCollaboration) / 2;
      const averageScore = (programmingScore + planningScore + communicationScore) / 3;

      return {
        frontend: user.frontend,
        backend: user.backend,
        individualCommunication: user.individualCommunication,
        teamCollaboration: user.teamCollaboration,
        design: user.design,
        management: user.management,
        programmingScore,
        planningScore,
        communicationScore,
        averageScore
      }
    },
  }
}
