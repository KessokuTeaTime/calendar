import { cn } from "@/lib/cn";

export type Vertical2DigitDateProps = {
  date: Date;
} & React.SVGAttributes<SVGSVGElement>;

export default function Vertical2DigitDate({
  date,
  ...props
}: Vertical2DigitDateProps) {
  const day = date.getDate();
  return (
    <div
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
      style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
      className={cn("relative w-full overflow-hidden", props.className)}
    >
      <svg
        viewBox="-0.25 0 10 50"
        className="absolute left-0 top-0 w-[150%] h-auto"
        preserveAspectRatio="xMinYMin meet"
      >
        <text
          x="0"
          y="0"
          fill="currentColor"
          fontFamily="var(--font-novecento)"
          fontSize="10"
          fontWeight="900"
          textAnchor="start"
          letterSpacing="-0.5"
          dominantBaseline="alphabetic"
        >
          {day.toString().padStart(2, "0")}
        </text>
      </svg>
    </div>
  );
}
