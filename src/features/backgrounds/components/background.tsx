import { Row } from "./row";
import { SocialLink } from "./social-link";
import { BackgroundBasicInfo } from "./basic-info";
import { backgroundsService } from "../instance";
import SkillsInput from "./skills-input";
import { EditInfoForm } from "./form-info";

export async function Background() {
  const background = (await backgroundsService.getById(2))[0];

  if (!background) {
    return null;
  }

  return (
    <div className="space-y-2 max-w-96">
      <BackgroundBasicInfo
        name={background.name}
        title={background.title}
        bio={background.bio}
        avatarURL={background.avatarUrl!}
      />

      <EditInfoForm background={background} />
      <div>
        <Row title="Languages" content={background.languages} />
        <Row title="Education" content={background.educations} />
        <SkillsInput tags={background.skills} />
        <ul className="flex gap-1 justify-end mt-2">
          {background.links &&
            background.links.map((link) => (
              <li key={link.url}>
                <SocialLink name={link.name} url={link.url} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
