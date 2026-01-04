import {
  getLunarDateNotation,
  getLunarMonthNotation,
} from "@/lib/display-date";

export type LunarDateMonthSegmentProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function LunarDateMonthSegment({
  date,
  ...props
}: LunarDateMonthSegmentProps) {
  const lunarMonthNotation = getLunarMonthNotation(date);
  const lunarDateNotation = getLunarDateNotation(date);
  return (
    <svg {...props} viewBox="0 0 40 10" preserveAspectRatio="xMinYMin meet">
      <text
        x="50%"
        y="50%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="10"
        fontWeight="600"
        letterSpacing="-0.5"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {lunarMonthNotation}月{lunarDateNotation}
      </text>
    </svg>
  );
}
