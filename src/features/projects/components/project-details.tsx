"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { H3, Separator } from "@/components";
import Link from "next/link";
import { ProjectDescription } from "./project-description";
import { Pencil } from "lucide-react";
import { Project } from "../types";

type Props = {
  project: Project;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
};

export default function ProjectDetails({ project, setShowDetails }: Props) {
  function toggleEdit() {
    setShowDetails(false)
  }

  return (
    <>
      <div className="flex justify-between items-baseline">
        <div className="flex flex-col ">
          <Link
            href={`https://github.com/${project.username}/${project.repository}`}
            className="ml-2  opacity-80 hover:opacity-100"
          >
            <H3>{project.title}</H3>
            <p className="text-xs text-gray-400 flex items-center gap-2">
              <FaGithub size={16} color="gray" />
              Last commit {"Today"}
            </p>
          </Link>
        </div>
        <button onClick={toggleEdit}>
          <Pencil className="mr-4 " size={16} />
        </button>
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
            <p className="text-gray-400 text-sm">Commits</p>
            <p className="font-semibold">{project.commits}</p>
          </article>
          <Separator orientation="horizontal" />
          <article className="flex flex-col items-center my-2">
            <p className="text-gray-400 text-sm">Issues</p>
            <p className="font-semibold">{project.issues}</p>
          </article>
          <Separator orientation="horizontal" />
          <article className="flex flex-col items-center my-2">
            <p className="text-gray-400 text-sm">Performance</p>
            <p className="font-semibold">{project.performance}%</p>
          </article>
        </div>
      </section>
      <ProjectDescription description={project.description} />
    </>
  );
}
