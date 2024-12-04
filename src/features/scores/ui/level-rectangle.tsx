import { ProgressRing } from "./progress-ring";

type Props = {
    percentage: number;
  };
  
  export function LevelRectangle({ percentage }: Props) {
    return (
      <div className="flex justify-start items-start mt-3 mb-4">
        <div className="flex border-2 rounded-full w-30 p-1 items-center border-purple-500">
          <ProgressRing percentage={percentage} />          
          <div className="font-semibold px-6">Level 3</div>
        </div>
      </div>
    );
  }
  