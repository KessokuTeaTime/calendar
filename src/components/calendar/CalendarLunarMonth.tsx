import {
  getLunarDateNotation,
  getLunarMonthNotation,
} from "@/lib/display-date";

export type CalendarLunarMonthProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function CalendarLunarMonth({
  date,
  ...props
}: CalendarLunarMonthProps) {
  const lunarMonthNotation = getLunarMonthNotation(date) || "無";
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
        {lunarMonthNotation}
      </text>
      <text
        x="50%"
        y="75%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.5"
        textAnchor="middle"
        dominantBaseline="central"
      >
        月
      </text>
    </svg>
  );
}
