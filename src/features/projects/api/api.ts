import * as chromeLauncher from "chrome-launcher";
import lighthouse, { Flags } from "lighthouse";

//Make this generic later on, for now it's just a simple fetch
export async function getTotalOfCommits() {
  const response = await fetch(
    "https://api.github.com/repos/alimohseni99/portfolio/stats/participation"
  );
  const data = await response.json();
  data.total = data.all.reduce((acc: number, value: number) => acc + value, 0);
  return data.total;
}

export async function getAllIssues() {
  const response = await fetch(
    "https://api.github.com/repos/alimohseni99/portfolio/issues"
  );
  const data = await response.json();
  return data;
}
export async function getDuration() {
  const response = await fetch(
    "https://api.github.com/repos/alimohseni99/portfolio/commits"
  );
  const data = await response.json();
  const firstCommit = data[data.length - 1].commit.author.date;
  const lastCommit = data[0].commit.author.date;
  const duration =
    new Date(lastCommit).getTime() - new Date(firstCommit).getTime();
  return duration;
}
