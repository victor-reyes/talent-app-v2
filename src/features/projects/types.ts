export type Project = {
  id: string;
  userId: string;
  username: string;
  repository: string;
  title: string;
  pictureURL: string | null;
  description: string;
  commits: string;
  issues: string;
};

export type RepositoryInformation = {
  commits: number;
  issues: number;
  lastCommit: string;
};
