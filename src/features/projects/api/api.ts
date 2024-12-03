export async function getTotalOfCommits(user: string, repo: string) {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repo}/stats/participation`
  );
  const data = await response.json();
  data.total = data.all.reduce((acc: number, value: number) => acc + value, 0);
  return data.total;
}

export async function getAllIssues(user: string, repo: string) {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repo}/issues`
  );
  const data = await response.json();
  return data;
}
export async function getDuration(user: string, repo: string) {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repo}/commits`
  );
  const data = await response.json();
  const firstCommit = data[data.length - 1].commit.author.date;
  const lastCommit = data[0].commit.author.date;
  const duration =
    new Date(lastCommit).getTime() - new Date(firstCommit).getTime();
  return duration;
}
