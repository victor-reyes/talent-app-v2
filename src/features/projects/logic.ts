export function extractRepositoryDetails(url: string) {
  const parts = url.split("/");
  if (parts.length < 5) {
    throw new Error("Invalid GitHub repository URL");
  }
  const newUsername = parts[3];
  const repoName = parts[4];
  const newTitle = repoName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return { newUsername, newTitle };
}
