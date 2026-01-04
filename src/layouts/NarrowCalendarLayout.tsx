import LunarDate from "@/components/LunarDate";
import { cn } from "@/lib/cn";
import Copyright from "./Copyright";
import {
  getGeorgianMonthNotation,
  getYoubiNameNotation,
} from "@/lib/display-date";

export default function NarrowCalendarLayout({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const date = new Date();
  const georgianMonthNotation = getGeorgianMonthNotation(date);
  const youbiNameNotation = getYoubiNameNotation(date);
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-[min(400px,30%)_1fr] grid-rows-[auto_1fr]",
        props.className
      )}
    >
      {/* lunar date (left top) */}
      <LunarDate className="col-start-1 row-start-1" />

      {/* gradient and copyright (left bottom) */}
      <div className="w-full h-full mt-auto col-start-1 row-start-2 flex flex-col">
        <div className="w-full grow bg-[linear-gradient(to_bottom,transparent_55%,var(--color-theme))]" />
        <div className="w-full h-12 bg-(--color-theme)" />
        <Copyright className="w-full text-(--color-theme)" />
      </div>

      {/* main content (right bottom) */}
      <div className="w-full h-full col-start-2 row-start-2 flex flex-col">
        <div className="w-[65%] flex flex-col">
          {/* weekday */}
          <div className="w-full h-12 flex flex-row-reverse items-center bg-[linear-gradient(to_right,var(--color-theme),transparent_40%)]">
            <span className="text-4xl font-bold font-(family-name:--font-zhuzimincho) text-(--color-theme)">
              {youbiNameNotation}
              {"\u2003"}曜日
            </span>
          </div>

          {/* year */}
          <div className="w-full h-18 p-2.5 bg-(--color-theme) flex flex-row items-center">
            <span className="text-6xl font-bold font-(family-name:--font-novecento) tracking-tighter text-(--color-bg)">
              {date.getFullYear()}
            </span>
          </div>

          {/* month */}
          <div className="w-full h-14 flex flex-row items-center">
            <span className="text-[42px] font-semibold font-(family-name:--font-pleasure) tracking-tighter text-(--color-theme)">
              {georgianMonthNotation}.
            </span>
          </div>
        </div>

        {/* day */}
        <div
          style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          className="relative w-full grow -mt-10 text-(--color-theme) overflow-hidden select-none"
        >
          <svg
            viewBox="0 0 10 50"
            className="absolute left-0 top-0 w-[150%] h-auto"
            preserveAspectRatio="XMinYMin meet"
          >
            <text
              x="0"
              y="0"
              fill="currentColor"
              fontFamily="Novecento"
              fontSize="10"
              fontWeight="900"
              textAnchor="start"
              letterSpacing="-0.5"
              dominantBaseline="alphabetic"
            >
              27
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
