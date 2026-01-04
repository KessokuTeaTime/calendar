import { useId } from "react";

export type YearSegmentProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function YearSegment({ date, ...props }: YearSegmentProps) {
  const id = useId();
  const year = date.getFullYear();
  return (
    <svg {...props} viewBox="0 0 100 24" preserveAspectRatio="xMinYMin meet">
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="currentColor"
        mask={`url(#${id}-mask-text)`}
      />
      <defs>
        <mask id={`${id}-mask-text`}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <text
            x="4%"
            y="50%"
            fill="black"
            fontFamily="var(--font-novecento)"
            fontSize="20"
            fontWeight="bold"
            letterSpacing="-1"
            textAnchor="start"
            dominantBaseline="central"
          >
            {year}
          </text>
        </mask>
      </defs>
    </svg>
  );
}
