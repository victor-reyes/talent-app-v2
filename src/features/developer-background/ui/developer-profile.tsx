import { CardContent } from "@/components/ui/card";
import { Skills } from "./skills";
import { Row } from "./row";
import { DeveloperAvatar } from "./developer-avatar";
import { SocialLink } from "./social-link";

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
    <CardContent>
      <BasicInfo
        name={developer.name}
        title={developer.title}
        bio={developer.bio}
        avatarURL={developer.avatarURL}
        links={developer.links}
      />

      <Row title="Languages" content={developer.languages} />
      <Row title="Education" content={developer.educations} />
      <Skills skills={developer.skills} />
    </CardContent>
  );
}

export function BasicInfo(user: {
  name: string;
  title: string;
  bio: string;
  avatarURL: string;
  links: { name: "Github" | "LinkedIn"; url: string }[];
}) {
  return (
    <div className="flex gap-4">
      <DeveloperAvatar url={user.avatarURL} />
      <div>
        <h2>{user.title}</h2>
        <h2>{user.name}</h2>
        <h2>{user.bio}</h2>
      </div>
      <ul>
        {user.links.map((link) => (
          <li key={link.name}>
            <SocialLink name={link.name} url={link.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
