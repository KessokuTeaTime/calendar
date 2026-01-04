import { getLunarYearNotation } from "@/lib/display-date";

export type LunarYearSegmentProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function LunarYearSegment({
  date,
  ...props
}: LunarYearSegmentProps) {
  const lunarYearNotation = getLunarYearNotation(date);
  return (
    <svg {...props} viewBox="0 0 20 10" preserveAspectRatio="xMinYMin meet">
      <text
        x="50%"
        y="50%"
        fontFamily="var(--font-zhuzimincho)"
        fontSize="9.25"
        fontWeight="bold"
        letterSpacing="-0.5"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {lunarYearNotation}
      </text>
    </svg>
  );
}
