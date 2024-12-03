type Props = {
  percentage: number;
};

export function ProgressRing({ percentage }: Props) {
  const getStrokeColor = (percentage: number) => {
    if (percentage <= 25) return "#808080"; 
    if (percentage <= 50) return "#4caf50"; 
    if (percentage <= 75) return "#2196f3"; 
    if (percentage <= 94) return "#9c27b0"; 
    return "#ff7961";
  };

  const strokeColor = getStrokeColor(percentage);
  return (
    <div className="flex justify-start items-start">
      <div className="flex border-2 rounded-full py-1 px-2 items-center border-purple-500">
        <div className="relative flex justify-center items-center h-16 w-16">
          <svg className="absolute" viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="2"
            />
            <path
              className="circle"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeDasharray={`${percentage}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-xs font-bold">{`${percentage}%`}</div>
        </div>
        <div className="font-semibold px-6">Level 3</div>
      </div>
    </div>
  );
}
