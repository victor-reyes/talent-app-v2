import { DeveloperAvatar } from "./developer-avatar";

export function BasicInfo(user: {
  name: string;
  title: string;
  bio: string;
  avatarURL: string;
}) {
  return (
    <div className="flex gap-4">
      <DeveloperAvatar url={user.avatarURL} />
      <div>
        <h2>{user.title}</h2>
        <h2>{user.name}</h2>
        <h2>{user.bio}</h2>
      </div>
    </div>
  );
}
