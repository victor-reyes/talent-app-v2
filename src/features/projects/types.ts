export type Project = {
  id: string;
  userId: string;
  username: string;
  repository: string;
  pictureURL: string | null;
  description: string;
};

export type RepositoryInformation = {
  commits: number;
  issues: number;
  lastCommit: string;
};
