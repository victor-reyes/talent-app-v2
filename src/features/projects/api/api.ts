import { cache } from "react";

export const getTotalOfCommits = cache(async (user: string, repo: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}/stats/participation`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    if (!response.ok) {
      console.log("not okey");
      return 0;
    }
    const data = await response.json();
    if (!data || !data.all || !Array.isArray(data.all)) {
      return 0;
    }
    const total = data.all.reduce(
      (acc: number, value: number) => acc + value,
      0
    );
    return total;
  } catch (error) {
    console.error("Error fetching commit statistics:", error);
    return 0;
  }
});

export const getAllIssues = cache(async (user: string, repo: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}/issues`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return 0;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching issues:", error);
    return 0;
  }
});

export const getDuration = cache(async (user: string, repo: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}/commits`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    if (!response.ok) {
      return 0;
    }
    const data = await response.json();
    const firstCommit = data[data.length - 1].commit.author.date;
    const lastCommit = data[0].commit.author.date;
    const duration =
      new Date(lastCommit).getTime() - new Date(firstCommit).getTime();
    return duration;
  } catch (error) {
    console.error("Error fetching duration:", error);
    return 0;
  }
});
