import { DeveloperCard } from "@/components/ui/developer-card";
import { DeveloperProfile } from "@/features/developer-background/ui";
import { FormInfo } from "@/features/developer-background/ui/form-info";

export default function Page() {
  return (
    <>
      <DeveloperCard>
        <FormInfo/>
        <DeveloperProfile />
      </DeveloperCard>
    </>
  );
}
