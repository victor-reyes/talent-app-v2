import { CardContent } from "@/components/ui/card";
import { Skills } from "./skills";
import { Row } from "./row";
import { DeveloperAvatar } from "./developer-avatar";
import { SocialLink } from "./social-link";

export function DeveloperProfile() {
  return (
    <CardContent>
      <BasicInfo
        name={"John"}
        title={"Javascript Developer"}
        shortBio={"Stuff"}
      />

      <Row
        title="Languages"
        content={["English", "Bulgarian", "Swedish", "Portuguese"]}
      />
      <Row
        title="Education"
        content={["BSc Computer Science", "Phd Bulgarian"]}
      />
      <Skills skills={["Javascript", "React", "Node"]} />
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
