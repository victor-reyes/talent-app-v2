import React from "react";

type Project = {
  title: string;
  link: string;
  commits: number;
  issues: number;
  duration: string;
  performance: number;
  tests: number;
};
type Props = {
  project: Project;
};
export default function ProjectDetails({ project }: Props) {
  const { title, commits, issues, duration, performance, tests } = project;
  return (
    <div className="container mx-auto">
      <h3>Project Title: {title}</h3>
      <div className="flex flex-row justify-between">
        <p>Commits: </p>
        <p>{commits}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Issues:</p>
        <p>{issues}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Duration:</p>
        <p>{duration}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Performance:</p>
        <p>{performance}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Test:</p>
        <p>{tests}</p>
      </div>
    </div>
  );
}
