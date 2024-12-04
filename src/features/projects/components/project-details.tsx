import React from "react";
import { FaCodeCommit } from "react-icons/fa6";
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
  const { username, repository } = project;
  return (
    <>
      <Link href={`https://github.com/${username}/${repository}`}>
        <HeaderH3>{repository}</HeaderH3>
        {/* <FaGithub size={26} color="gray" /> */}
        <section className="flex flex-col justify-center items-center mt-6">
          <article className="flex flex-col items-center mb-4">
            <GiDuration size={28} color="gray" />
            <p className="text-gray-400 text-lg">Duration</p>
            <p className="font-semibold text-xl">
              {repositoryInformation.duration}
            </p>
          </article>

          <div className="flex justify-between gap-6">
            <div className="flex items-center justify-center gap-4">
              <article className="flex flex-col items-center">
                <FaCodeCommit />
                <p className="text-gray-400 text-sm">Commits</p>
                <p className="font-semibold">{repositoryInformation.commits}</p>
              </article>
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
                <p className="font-semibold">56%</p>
              </article>
              <Separator orientation="vertical" />
              <article className="flex flex-col items-center">
                <SiTestcafe />
                <p className="text-gray-400 text-sm">Tests</p>
                <p className="font-semibold">10</p>
              </article>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
}
