import {
  getLunarDateNotation,
  getLunarMonthNotation,
} from "@/lib/display-date";

export type CalendarLunarDateProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function CalendarLunarDate({
  date,
  ...props
}: CalendarLunarDateProps) {
  const lunarDateNotation = getLunarDateNotation(date) || "未知";
  return (
    <svg {...props} viewBox="0 0 10 20" preserveAspectRatio="xMinYMin meet">
      <text
        x="50%"
        y="25%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.5"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {lunarDateNotation[0]}
      </text>
      <text
        x="50%"
        y="75%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.5"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {lunarDateNotation[1]}
      </text>
    </svg>
  );
}
