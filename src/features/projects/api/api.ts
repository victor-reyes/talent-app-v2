import dotenv from "dotenv";
dotenv.config();

export const createClient = () => {
  return {
    getTotalOfCommits: async (user: string, repo: string) => {
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
          return null;
        }
        const data = await response.json();
        if (!data || !data.all || !Array.isArray(data.all)) {
          return null;
        }
        const total = data.all.reduce(
          (acc: number, value: number) => acc + value,
          0
        );
        return total;
      } catch (error) {
        console.error("Error fetching commit statistics:", error);
        return null;
      }
    },

    getAllIssues: async (user: string, repo: string) => {
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
          return null;
        }

        const data = await response.json();

        return data;
      } catch (error) {
        console.error("Error fetching issues:", error);
        return null;
      }
    },

    getDuration: async (user: string, repo: string) => {
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
          return null;
        }
        const data = await response.json();
        const lastCommit = data[0].commit.author.date.split("T")[0];

        return lastCommit;
      } catch (error) {
        console.error("Error fetching duration:", error);
        return null;
      }
    },

    testPagePerformance: async (url: string) => {
      const apiKey = process.env.GOOGLE_API_KEY;
      const isPerformanceFeatureEnabled =
        process.env.PERFORMANCE_FEATURE_ENABLED === "true";

      if (!isPerformanceFeatureEnabled || !apiKey) {
        console.log("Skipping performance test");
        return null;
      }
      const pageUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}`;
      let performanceScore = 0;

      try {
        const response = await fetch(pageUrl);
        const data = await response.json();
        performanceScore = data.lighthouseResult.categories.performance.score;
      } catch (error) {
        console.error("Error fetching performance score:", error);
        return null;
      }

      return performanceScore * 100;
    },
  };
};
