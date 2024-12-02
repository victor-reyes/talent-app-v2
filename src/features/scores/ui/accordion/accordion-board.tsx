import { Coding } from "./coding";
import { Communication } from "./communication";
import { Planning } from "./planning";

export function AccordionBoard() {
  return (
    <>
      <Communication />
      <Planning />
      <Coding />
    </>
  );
}
