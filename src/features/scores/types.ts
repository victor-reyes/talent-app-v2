export type Scores = {
  id: number;
  frontend: number;
  backend: number;
  individualCommunication: number;
  teamCollaboration: number;
  design: number;
  management: number;
};

export type CompleteScores = Scores & {
  programmingScore: number;
  planningScore: number;
  communicationScore: number;
  averageScore: number;
};

export type NewScores = Omit<Scores, "id">;
