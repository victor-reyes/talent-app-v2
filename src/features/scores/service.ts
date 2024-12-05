import { Db } from "@/db";
import { createRepository } from "./repository";
import { calculateCategoriesScores } from "./logic";
import { DeveloperScore, NewDeveloperScores } from "./types";

export const createService = (db: Db) => {
  const repository = createRepository(db);
  return {
    getDeveloperScoreById: async (userId: number) => {
      try {
        const score = (await repository.getById(userId))[0] as DeveloperScore;

        const {
          programmingScore,
          planningScore,
          communicationScore,
          averageScore,
        } = calculateCategoriesScores(score);

        return {
          id: userId,
          frontend: score.frontend,
          backend: score.backend,
          individualCommunication: score.individualCommunication,
          teamCollaboration: score.teamCollaboration,
          design: score.design,
          management: score.management,
          programmingScore,
          planningScore,
          communicationScore,
          averageScore,
        };
      } catch (error) {
        console.log(error);
        return {
          id: 1,
          frontend: 0,
          backend: 0,
          individualCommunication: 0,
          teamCollaboration: 0,
          design: 0,
          management: 0,
          programmingScore: 0,
          planningScore: 0,
          communicationScore: 0,
          averageScore: 0,
        };
      }
    },
    patchDeveloperScores: async (userId: number, newDeveloperScores: NewDeveloperScores) => {
      repository.updateScore(userId, newDeveloperScores)
    },
  };
};
