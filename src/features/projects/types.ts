export type Project = {
  id: string;
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
  repository: string;
  description: string;
  performance: string;
};

export type UpdatedProject = {
  id: string;
  description: string;
  title: string;
};
