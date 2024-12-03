import { DeveloperAvatar } from "./developer-avatar";

type Props = { name: string; title: string; bio: string; avatarURL: string };

export function BasicInfo({ name, title, bio, avatarURL }: Props) {
  return (
    <div className="flex gap-6">
      <DeveloperAvatar url={avatarURL} />
      <div className="leading-5">
        <h2 className="font-bold">{name}</h2>
        <h2 className="font-normal text-sm">{title}</h2>
        <h2 className="font-light text-xs text-slate-600">{bio}</h2>
      </div>
    </div>
  );
}
