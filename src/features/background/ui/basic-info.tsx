import { HeaderH2 } from "@/components/ui/header/header-h2";
import { DeveloperAvatar } from "./developer-avatar";
import { EditInfoForm } from "./form-info";

type Props = { name: string; title: string; bio: string; avatarURL: string };

export function BasicInfo({ name, title, bio, avatarURL }: Props) {
  const isFeatureBioEnabled = process.env.NEXT_PUBLIC_FEATURE_BIO === "true";
  return (
    <>
      <div className="flex gap-6">
        <DeveloperAvatar url={avatarURL} />
        <div className="leading-5">
          <p className="uppercase text-sm font-semibold">{title}</p>
          <HeaderH2>{name}</HeaderH2>
          {isFeatureBioEnabled && (
            <p className="font-light text-slate-600">{bio}</p>
          )}
        </div>
        <EditInfoForm />
      </div>
    </>
  );}

