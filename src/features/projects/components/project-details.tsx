import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HeaderH3 } from "@/components/ui/header/header-h3";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { projectService } from "../instance";
import { ProjectDescription } from "./project-description";
import { Pencil } from "lucide-react";

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
      <div className="flex justify-between items-baseline">
        <div className="flex flex-col ">
          <Link
            href={`https://github.com/${username}/${repository}`}
            className="ml-2  opacity-80 hover:opacity-100"
          >
            <HeaderH3>{repository}</HeaderH3>
            <p className="text-xs text-gray-400 flex items-center gap-2">
              <FaGithub size={16} color="gray" />
              Last commit {repositoryInformation.lastCommit}
            </p>
          </Link>
        </div>
        <Pencil className="mr-4 " size={16} />
      </div>
      <section className="flex justify-between items-start mt-2 gap-2">
        <Image
          src="/restaurant1.png"
          width={250}
          height={240}
          alt=""
          className="m-2 object-cover rounded-lg"
        />
        <div className="flex flex-col items-center justify-between gap-4 mt-2 mr-2">
          <article className="flex flex-col items-center my-2">
            {/* <FaCodeCommit /> */}
            <p className="text-gray-400 text-sm">Commits</p>
            <p className="font-semibold">{repositoryInformation.commits}</p>
          </article>
          <Separator orientation="horizontal" />
          <article className="flex flex-col items-center my-2">
            {/* <GoIssueOpened /> */}
            <p className="text-gray-400 text-sm">Issues</p>
            <p className="font-semibold">{repositoryInformation.issues}</p>
          </article>
          <Separator orientation="horizontal" />
          <article className="flex flex-col items-center my-2">
            {/* <CgPerformance /> */}
            <p className="text-gray-400 text-sm">Performance</p>
            <p className="font-semibold">56%</p>
          </article>
        </div>
      </section>
      <ProjectDescription />
    </>
  );
}
