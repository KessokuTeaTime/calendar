import { getYoubiNameNotation } from "@/lib/display-date";
import { useId } from "react";

export type CalendarWeekdayProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function CalendarWeekday({
  date,
  ...props
}: CalendarWeekdayProps) {
  const id = useId();
  const youbiNameNotation = getYoubiNameNotation(date);
  return (
    <svg {...props} viewBox="0 0 100 15" preserveAspectRatio="xMinYMin meet">
      <rect
        x="0"
        y="0"
        width="40%"
        height="100%"
        fill={`url(#${id}-gradient)`}
      />
      <text
        x="101%"
        y="50%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="11.5"
        letterSpacing="-1"
        textAnchor="end"
        dominantBaseline="central"
      >
        {youbiNameNotation}
        {"\u2003"}曜日
      </text>
      <defs>
        <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
