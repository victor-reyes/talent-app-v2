import Link from "next/link";
import { FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink } from "../schema";

type Props = SocialLink & { size?: number };
export function SocialLink({ url, name, size = 24 }: Props) {
  return (
    <>
      {name === "Github" && (
        <Link href={url}>
          <FaGithub size={size} />
        </Link>
      )}
      {name === "LinkedIn" && (
        <Link href={url}>
          <FaLinkedin size={size} />
        </Link>
      )}
      {name === "Resume" && (
        <Link href={url}>
          <FaBriefcase size={size} />
        </Link>
      )}
    </>
  );
}
