import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Props = { url: string; name: "Github" | "LinkedIn", size?: number};
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
    </>
  );
}
