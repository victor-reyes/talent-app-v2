import { DeveloperCard } from "@/components/ui/developer-card";
import { DeveloperProfile } from "@/features/developer-background/ui";
import { FormInfo } from "@/features/developer-background/ui/form-info";

export default function Page() {
  return (
    <>
      <DeveloperCard>
        <FormInfo />
        <DeveloperProfile developer={mockDeveloper} />
      </DeveloperCard>
    </>
  );
}

const mockDeveloper = {
  name: "John Doe",
  title: "Software Engineer",
  bio: "I'm a software engineer with 5 years of experience",
  avatarURL: "https://avatars.githubusercontent.com/u/1?v=4",
  languages: ["JavaScript", "TypeScript", "Python"],
  educations: ["BSc in Computer Science"],
  skills: ["React", "Node.js", "Django"],
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
