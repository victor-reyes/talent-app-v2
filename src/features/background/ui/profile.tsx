import { Skills } from "./skills";
import { Row } from "./row";
import { SocialLink } from "./social-link";
import { BackgroundBasicInfo } from "./basic-info";


type Props = {
  developer?: {
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
//check the types to not have duplicates
export function Background({ developer = mockDeveloper }: Props) {
  //backgroundsService.getbyid
  return (
    <div className="space-y-2 max-w-96">
      <BackgroundBasicInfo
        name={developer.name}
        title={developer.title}
        bio={developer.bio}
        avatarURL={developer.avatarURL}
      />

      <div>
        <Row title="Languages" content={developer.languages} />
        <Row title="Education" content={developer.educations} />
        <Skills skills={developer.skills} />
        <ul className="flex gap-1 justify-end mt-2">
          {developer.links.map((link) => (
            <li key={link.name}>
              <SocialLink name={link.name} url={link.url} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mockDeveloper = {
  name: "John Doe",
  title: "Software Engineer",
  bio: "I'm a software engineer with 5 years of experience",
  avatarURL: "https://avatars.githubusercontent.com/u/1?v=4",
  languages: ["JavaScript", "TypeScript", "Python"],
  educations: ["BSc in Computer Science"],
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "Tailwind CSS",
    "PostgreSQL",
  ],
  links: [
    {
      name: "Github" as "Github" | "LinkedIn",
      url: "https://github.com/johndoe",
    },
    {
      name: "LinkedIn" as "Github" | "LinkedIn",
      url: "https://linkedin.com/johndoe",
    },
  ],
};
