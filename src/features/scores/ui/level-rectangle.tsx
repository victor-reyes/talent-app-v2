import { ProgressRing } from "./progress-ring";

type Props = {
  percentage: number;
};

export function LevelRectangle({ percentage }: Props) {
  // Reuse the color logic from ProgressRing
  const getStrokeColor = (percentage: number) => {
    if (percentage === 0) return "#808080"; // Gray
    if (percentage <= 50) return "#4caf50"; // Green
    if (percentage <= 69) return "#2196f3"; // Blue
    if (percentage <= 79) return "#9c27b0"; // Purple
    if (percentage <= 89) return "#800080"; // Dark Purple
    return "#ff7961"; // Red
  };

  const borderColor = getStrokeColor(percentage);

  return (
    <div className="flex justify-start items-start mt-3 mb-4">
      <div
        className="flex border-2 rounded-full w-30 p-1 items-center"
        style={{ borderColor }}
      >
        <ProgressRing percentage={percentage} />
        <div className="font-semibold px-6">Level 3</div>
      </div>
    </div>
  );
}
