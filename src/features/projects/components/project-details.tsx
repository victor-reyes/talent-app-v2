import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCodeCommit, FaGithub } from "react-icons/fa6";
import { HeaderH3 } from "@/components/ui/header/header-h3";
import Link from "next/link";
import { GoIssueOpened } from "react-icons/go";
import { GiDuration } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import { SiTestcafe } from "react-icons/si";
import { Separator } from "@/components/ui/separator";
import { projectService } from "../instance";

type Project = {
  username: string;
  repository: string;
};
type Props = {
  project: Project;
};
export default async function ProjectDetails({ project }: Props) {
  const repositoryInformation = await projectService.getRepositoryInformation(
    project.username,
    project.repository
  );
  console.log("repo:", repositoryInformation);
  const { username, repository } = project;
  return (
    <Card>
      <CardHeader className="mb-0 pb-0">
        <CardTitle>
          <div className="flex  gap-4">
            <HeaderH3>{repository}</HeaderH3>
            <Link
              href={`https://github.com/${username}/${repository}`}
              className="mb-8 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <FaGithub size={26} color="gray" />
            </Link>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col justify-center items-center">
          <article className="flex flex-col items-center">
            <GiDuration size={28} color="gray" />
            <p className="text-gray-400 text-lg">Duration</p>
            <p className="font-semibold text-xl">
              {repositoryInformation.duration}
            </p>
          </article>
          <Separator className="my-4" />
          <div className="flex justify-between gap-6">
            <div className="flex items-center justify-center gap-6">
              <article className="flex flex-col items-center">
                <FaCodeCommit />
                <p className="text-gray-400 text-sm">Commits</p>
                <p className="font-semibold">{repositoryInformation.commits}</p>
              </article>
              <Separator orientation="vertical" />
              <Separator orientation="vertical" />
              <article className="flex flex-col items-center">
                <GoIssueOpened />
                <p className="text-gray-400 text-sm">Issues</p>
                <p className="font-semibold">{repositoryInformation.issues}</p>
              </article>
              <Separator orientation="vertical" />
              <article className="flex flex-col items-center">
                <CgPerformance />
                <p className="text-gray-400 text-sm">Performance</p>
                <p className="font-semibold">86%</p>
              </article>
              <article className="flex flex-col items-center">
                <SiTestcafe />
                <p className="text-gray-400 text-sm">Tests</p>
                <p className="font-semibold">10</p>
              </article>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
