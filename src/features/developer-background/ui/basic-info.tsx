import { DeveloperAvatar } from "./developer-avatar";

type Props = { name: string; title: string; bio: string; avatarURL: string };

export function BasicInfo({ name, title, bio, avatarURL }: Props) {
  return (
    <div className="flex gap-4">
      <DeveloperAvatar url={avatarURL} />
      <div>
        <h2>{title}</h2>
        <h2>{name}</h2>
        <h2>{bio}</h2>
      </div>
    </div>
  );
}
