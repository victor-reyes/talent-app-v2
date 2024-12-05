import { Skills } from "./skills";
import { Row } from "./row";
import { SocialLink } from "./social-link";
import { BackgroundBasicInfo } from "./basic-info";
import { backgroundsService } from "../instance";

export async function Background() {
  const background = (await backgroundsService.getById(1))[0];
  return (
    <div className="space-y-2 max-w-96">
      <BackgroundBasicInfo
        name={background.name}
        title={background.title}
        bio={background.bio}
        avatarURL={background.avatarUrl!}
      />
      <div>
        <Row title="Languages" content={background.languages} />
        <Row title="Education" content={background.educations} />
        <Skills skills={background.skills} />
        <ul className="flex gap-1 justify-end mt-2">
          {background.links &&
            background.links.map((link) => (
              <li key={link}>
                <SocialLink name={"Github"} url={link} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
