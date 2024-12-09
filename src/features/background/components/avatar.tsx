import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

type Props = {
  url: string;
};

export function BackgroundAvatar({ url }: Props) {
  return (
    <Avatar>
      <AvatarImage src={url} />
      <AvatarFallback>Avatar</AvatarFallback>
    </Avatar>
  );
}
