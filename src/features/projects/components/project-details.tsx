import React from "react";
import { FaCodeCommit, FaGithub } from "react-icons/fa6";
import { HeaderH3 } from "@/components/ui/header/header-h3";
import Link from "next/link";
import { GoIssueOpened } from "react-icons/go";
import { GiDuration } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import { SiTestcafe } from "react-icons/si"
import { Separator } from "@/components/ui/separator";

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
  const { title, link, commits, issues, duration, performance, tests } =
    project;
  return (
    <>
    <div className="flex gap-4">
      <HeaderH3>{title}</HeaderH3>
      <Link
        href={link}
        className="mb-8 font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        <FaGithub size={26} color="gray" />
      </Link>
  </div>
  <section className="flex flex-col justify-center items-center">
  <article className="flex flex-col items-center mb-4">
    <GiDuration size={28} color="gray" />
    <p className="text-gray-400 text-lg">Duration</p>
    <p className="font-semibold text-xl">{duration}</p>
  </article>

  <div className="flex justify-between gap-6">
    <div className="flex items-center justify-center gap-4">
      <article className="flex flex-col items-center">
        <FaCodeCommit />
        <p className="text-gray-400 text-sm">Commits</p>
        <p className="font-semibold">{commits}</p>
      </article>
      <Separator orientation="vertical" />
      <article className="flex flex-col items-center">
        <GoIssueOpened />
        <p className="text-gray-400 text-sm">Issues</p>
        <p className="font-semibold">{issues}</p>
      </article>
      <Separator orientation="vertical" />
      <article className="flex flex-col items-center">
        <CgPerformance />
        <p className="text-gray-400 text-sm">Performance</p>
        <p className="font-semibold">{performance}%</p>
      </article>
      <Separator orientation="vertical" />
      <article className="flex flex-col items-center">
        <SiTestcafe />
        <p className="text-gray-400 text-sm">Tests</p>
        <p className="font-semibold">{tests}</p>
      </article>
    </div>
  </div>
</section>
</>
  );
}
