import { DeveloperCard } from "@/components/ui/developer-card";
import { DeveloperProfile } from "@/features/developer-background/ui";

export default function Page() {
  return (
    <>
      <DeveloperCard>
        <DeveloperProfile />
      </DeveloperCard>
    </>
  );
}
