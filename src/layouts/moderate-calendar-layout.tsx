import Copyright from "@/components/c-opyright";
import CalendarMonth from "@/components/calendar/calendar-month";
import CalendarWeekday from "@/components/calendar/calendar-weekday";
import CalendarYear from "@/components/calendar/calendar-year";
import { cn } from "@/lib/cn";
import CalendarLunarYear from "@/components/calendar/calendar-lunar-year";
import CalendarLunarDate from "@/components/calendar/calendar-lunar-date";
import CalendarLunarMonth from "@/components/calendar/calendar-lunar-month";

export default function ModerateCalendarLayout({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const date = new Date();
  const day = date.getDate();
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-[min(400px,36%)_1fr] grid-rows-[auto_auto_1fr_auto]",
        props.className
      )}
    >
      {/* lunar year (left top) */}
      <CalendarLunarYear
        className="w-full col-start-1 row-start-1 pt-[5%] pb-[5%] bg-(--color-theme) text-(--color-bg) font-extrabold"
        date={date}
        fill="currentColor"
      />

      {/* lunar month (left middle upper) */}
      <CalendarLunarMonth
        className="w-[25%] col-start-1 row-start-2 ml-[50%] mr-auto mt-auto text-(--color-theme) font-light"
        date={date}
        fill="currentColor"
      />

      {/* lunar date and gradient (left middle lower) */}
      <div className="w-full h-full mt-auto col-start-1 row-start-3 flex flex-col items-center">
        <CalendarLunarDate
          className="w-[25%] ml-[50%] mr-auto mt-[4%] text-(--color-theme) font-bold"
          date={date}
          fill="currentColor"
        />
        <div className="w-full grow bg-[linear-gradient(to_bottom,transparent_55%,var(--color-theme))]" />
        <div className="w-full h-12 bg-(--color-theme)" />
      </div>

      {/* copyright (left bottom) */}
      <Copyright className="w-full h-full col-start-1 row-start-4 text-(--color-theme)" />

      {/* youbi and numeric year (right middle upper) */}
      <div className="w-full h-full col-start-2 row-start-2 flex flex-col text-(--color-theme)">
        <CalendarWeekday
          className="w-full font-bold"
          date={date}
          fill="currentColor"
        />
        <CalendarYear
          className="w-full font-extrabold"
          date={date}
          fill="currentColor"
        />
      </div>

      {/* georgian month and numeric date (right middle lower) */}
      <div className="w-full h-full col-start-2 row-start-3 flex flex-col text-(--color-theme)">
        <CalendarMonth
          className="w-full font-bold"
          date={date}
          fill="currentColor"
        />

        <div className="relative w-[60%] grow ml-auto -mt-[25%] -mr-[10%] text-(--color-theme) font-extrabold overflow-hidden select-none">
          <svg
            viewBox="0 0 10 20"
            className="absolute w-full left-0 top-0"
            preserveAspectRatio="xMinYMin meet"
            fill="currentColor"
          >
            <text
              x="50%"
              y="30%"
              fontFamily="var(--font-novecento)"
              fontSize="10"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {day.toString().padStart(2, "0")[0]}
            </text>
            <text
              x="50%"
              y="70%"
              fontFamily="var(--font-novecento)"
              fontSize="10"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {day.toString().padStart(2, "0")[1]}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
