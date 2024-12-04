import React from "react";
import { FaCodeCommit, FaGithub } from "react-icons/fa6";
import { HeaderH3 } from "@/components/ui/header/header-h3";
import Link from "next/link";
import { GoIssueOpened } from "react-icons/go";
import { GiDuration } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
import { projectService } from "../instance";
import Image from "next/image";

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
      <Link
        href={`https://github.com/${username}/${repository}`}
        className="flex gap-2 ml-2"
      >
        <HeaderH3>{repository}</HeaderH3>
        <FaGithub size={26} color="gray" />
      </Link>
      <section className="flex justify-between items-start mt-6 gap-4">
        <div >
          <Image
            src="/restaurant1.png"
            width={250}
            height={240}
            alt=""
            className="m-2 object-cover rounded-lg"
          />
          <p className=" m-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            debitis sunt illo ex maiores error eos nostrum atque quasi sequi
            tempore molestiae optio dolore facere aliquam, totam sint sed iste?
          </p>
        </div>
 
          <div className="flex flex-col items-center justify-start gap-4 mt-2">
            <article className="flex flex-col items-center">
              <GiDuration />
              <p className="text-gray-400 text-sm">Duration</p>
              <p className="font-semibold">{repositoryInformation.duration}</p>
            </article>
            <Separator orientation="horizontal" />
            <article className="flex flex-col items-center">
              <FaCodeCommit />
              <p className="text-gray-400 text-sm">Commits</p>
              <p className="font-semibold">{repositoryInformation.commits}</p>
            </article>
            <Separator orientation="horizontal" />
            <article className="flex flex-col items-center">
              <GoIssueOpened />
              <p className="text-gray-400 text-sm">Issues</p>
              <p className="font-semibold">{repositoryInformation.issues}</p>
            </article>
            <Separator orientation="horizontal" />
            <article className="flex flex-col items-center">
              <CgPerformance />
              <p className="text-gray-400 text-sm">Performance</p>
              <p className="font-semibold">56%</p>
            </article>
          </div>
      </section>
    </>
  );
}
