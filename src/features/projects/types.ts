export type Project = {
  userId: string;
  username: string;
  repository: string;
  title: string;
  imageUrl: string | null;
  performance: string;
  description: string;
  commits: string;
  issues: string;
};

export type ProjectData = {
  username: string;
  repository: string;
  title: string;
  description: string;
  performance: string;
};
