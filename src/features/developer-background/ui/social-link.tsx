import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Props = { url: string; name: "Github" | "LinkedIn" };
export function SocialLink({ url, name }: Props) {
  return (
    <>
      {name === "Github" && (
        <Link href={url}>
          <FaGithub />
        </Link>
      )}
      {name === "LinkedIn" && (
        <Link href={url}>
          <FaLinkedin />
        </Link>
      )}
    </>
  );
}
