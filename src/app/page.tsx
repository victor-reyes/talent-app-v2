
import { DeveloperCard } from "@/features/design-system/developer-card";
import { HeaderH1 } from "@/features/design-system/header/header-h1";
import { HeaderH2 } from "@/features/design-system/header/header-h2";
import { HeaderH3 } from "@/features/design-system/header/header-h3";

export default function Home() {
  return (
    <>
      <DeveloperCard />
      <HeaderH1>Header</HeaderH1>
      <HeaderH2>Header2</HeaderH2>
      <HeaderH3>Header3</HeaderH3>
    </>
  );
}
