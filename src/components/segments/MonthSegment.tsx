import { getGeorgianMonthNotation } from "@/lib/display-date";

export type MonthSegmentProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function MonthSegment({ date, ...props }: MonthSegmentProps) {
  const georgianMonthNotation = getGeorgianMonthNotation(date);
  return (
    <svg {...props} viewBox="0 0 100 18" preserveAspectRatio="xMinYMin meet">
      <text
        x="0"
        y="50%"
        fontFamily="var(--font-pleasure)"
        fontSize="13"
        fontWeight="bold"
        letterSpacing="-0.5"
        textAnchor="start"
        dominantBaseline="central"
      >
        {georgianMonthNotation}.
      </text>
    </svg>
  );
}
