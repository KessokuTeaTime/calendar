import { getLunarYearNotation } from "@/lib/display-date";

export type CalendarLunarYearProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function CalendarLunarYear({
  date,
  ...props
}: CalendarLunarYearProps) {
  const lunarYearNotation = getLunarYearNotation(date) ?? "未知";
  return (
    <svg {...props} viewBox="0 0 20 10" preserveAspectRatio="xMinYMin meet">
      <text
        x="30%"
        y="50%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.25"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {lunarYearNotation[0]}
      </text>
      <text
        x="70%"
        y="50%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.25"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {lunarYearNotation[1]}
      </text>
    </svg>
  );
}
