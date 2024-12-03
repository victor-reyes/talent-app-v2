import { Skills } from "./skills";
import { Row } from "./row";
import { SocialLink } from "./social-link";
import { BasicInfo } from "./basic-info";

type Props = {
  developer: {
    avatarURL: string;
    name: string;
    title: string;
    bio: string;
    languages: string[];
    educations: string[];
    skills: string[];
    links: {
      name: "Github" | "LinkedIn";
      url: string;
    }[];
  };
};

export function DeveloperProfile({ developer }: Props) {
  return (
    <>
      <BasicInfo
        name={developer.name}
        title={developer.title}
        bio={developer.bio}
        avatarURL={developer.avatarURL}
      />

      <Row title="Languages" content={developer.languages} />
      <Row title="Education" content={developer.educations} />
      <Skills skills={developer.skills} />
      <ul className="flex gap-1 justify-end">
        {developer.links.map((link) => (
          <li key={link.name}>
            <SocialLink name={link.name} url={link.url} />
          </li>
        ))}
      </ul>
    </>
  );
}
