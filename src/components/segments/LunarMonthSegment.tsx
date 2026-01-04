import {
  getLunarDateNotation,
  getLunarMonthNotation,
} from "@/lib/display-date";

export type LunarMonthSegmentProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function LunarMonthSegment({
  date,
  ...props
}: LunarMonthSegmentProps) {
  const lunarMonthNotation = getLunarMonthNotation(date) || "無";
  return (
    <svg {...props} viewBox="0 0 10 20" preserveAspectRatio="xMinYMin meet">
      <text
        x="50%"
        y="25%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.5"
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {lunarMonthNotation}
      </text>
      <text
        x="50%"
        y="75%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.5"
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="central"
      >
        月
      </text>
    </svg>
  );
}
