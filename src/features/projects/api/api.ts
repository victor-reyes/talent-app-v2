import dotenv from "dotenv";
import { cache } from "react";
dotenv.config();
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
    const lastCommit = data[0].commit.author.date.split("T")[0];

    return lastCommit;
  } catch (error) {
    console.error("Error fetching duration:", error);
    return 0;
  }
});

export const testPagePerformance = async (url: string) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  const pageUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}`;
  let performanceScore = 0;

  try {
    const response = await fetch(pageUrl);
    const data = await response.json();
    performanceScore = data.lighthouseResult.categories.performance.score;
  } catch (error) {
    console.error("Error fetching performance score:", error);
    return 0;
  }

  return performanceScore * 100;
};
