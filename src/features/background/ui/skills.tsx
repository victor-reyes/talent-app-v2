"use client";
import { Badge } from "@/components/ui/badge";

type Props = { skills: string[] | undefined };
export function Skills({ skills }: Props) {
  return (
    <article className="flex justify-start flex-wrap gap-1 mt-3">
      {skills &&
        skills.map((skill) => (
          <Badge
            className="cursor-pointer"
            key={skill}
            onClick={() => console.log(skill)}
          >
            {skill}
          </Badge>
        ))}
    </article>
  );
}
