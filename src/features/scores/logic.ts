import { Scores } from "./types";

export const calculateCategoriesScores = (scores: Scores) => {
  const programmingScore =
    (scores.frontend + scores.backend) / 2;
  const planningScore = (scores.management + scores.design) / 2;
  const communicationScore =
    (scores.individualCommunication +
      scores.teamCollaboration) /
    2;
  const averageScore = Math.round(
    (programmingScore + planningScore + communicationScore) / 3
  );

  return {
    programmingScore: Math.round(programmingScore),
    planningScore: Math.round(planningScore),
    communicationScore: Math.round(communicationScore),
    averageScore,
  };
};
