// export function calculateAverageLevel(communicationLevel: number, planningLevel: number, codingLevel: number) {

import { DeveloperScore } from "./types";

//     const sumLevel = communicationLevel + planningLevel + codingLevel;

//     const level = sumLevel / 50;

//     return level;
// }

export const calculateCategoriesScores = (developerScore: DeveloperScore) => {
  const programmingScore =
    (developerScore.frontend + developerScore.backend) / 2;
  const planningScore = (developerScore.management + developerScore.design) / 2;
  const communicationScore =
    (developerScore.individualCommunication +
      developerScore.teamCollaboration) /
    2;
  const averageScore = Math.round(
    (programmingScore + planningScore + communicationScore) / 3
  );

  return {
    programmingScore,
    planningScore,
    communicationScore,
    averageScore,
  };
};
