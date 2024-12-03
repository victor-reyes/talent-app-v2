import { CardContent } from "@/components/ui/card";
import { Skills } from "./skills";

export function DeveloperProfile() {
  return (
    <CardContent>
      <BasicInfo
        name={"John"}
        title={"Javascript Developer"}
        shortBio={"Stuff"}
      />
      <Skills skills={["Javascript", "React", "Node"]} />
    </CardContent>
  );
}

export function BasicInfo(user: {
  name: string;
  title: string;
  shortBio: string;
}) {
  return (
    <>
      <h2>{user.title}</h2>
      <h2>{user.name}</h2>
      <h2>{user.shortBio}</h2>
    </>
  );
}
