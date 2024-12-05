import { CompleteDeveloperScore } from "../../types";
import { Coding } from "./coding";
import { Communication } from "./communication";
import { Planning } from "./planning";

type Props = {
  developerScore: CompleteDeveloperScore
}

export function AccordionBoard( {developerScore} : Props) {

  return (
    <>
      <Communication developerScore={developerScore} />
      <Planning developerScore={developerScore} />
      <Coding developerScore={developerScore} />
    </>
  );
}
