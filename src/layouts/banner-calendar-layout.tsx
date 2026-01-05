import CalendarLunarDate from "@/components/calendar/calendar-lunar-date";
import CalendarLunarMonth from "@/components/calendar/calendar-lunar-month";
import CalendarLunarYear from "@/components/calendar/calendar-lunar-year";
import CalendarMonth from "@/components/calendar/calendar-month";
import CalendarWeekday from "@/components/calendar/calendar-weekday";
import CalendarYear from "@/components/calendar/calendar-year";
import Copyright from "@/components/copyright";
import { cn } from "@/lib/cn";

export default function BannerCalendarLayout({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const date = new Date();
  const day = date.getDate();
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-[min(400px,36%)_min(400px,36%)_1fr] grid-rows-[auto_1fr_auto]",
        props.className
      )}
    >
      {/* lunar date (left top) */}
      <div className="w-full h-full col-start-1 row-start-1 p-[5%] flex flex-row justify-center items-center bg-(--color-theme) text-(--color-bg)">
        <CalendarLunarYear
          className="w-[70%] -ml-[5%] -mr-[5%] font-extrabold"
          date={date}
          fill="currentColor"
        />
        <div className="h-full flex pt-[2.5%] pb-[2.5%] ml-[5%] mr-[5%] justify-center items-center">
          <svg
            viewBox="0 0 1 50"
            className="h-full"
            preserveAspectRatio="xMinYMin meet"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="currentColor" />
          </svg>
        </div>
        <CalendarLunarMonth
          className="w-[15%] font-medium"
          date={date}
          fill="currentColor"
        />
        <CalendarLunarDate
          className="w-[15%] font-medium"
          date={date}
          fill="currentColor"
        />
      </div>

      {/* youbi, numeric year and georgian month (middle middle) */}
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
        <CalendarMonth
          className="w-full font-bold"
          date={date}
          fill="currentColor"
        />
      </div>

      {/* gradient and copyright (left middle-bottom) */}
      <div className="w-full h-full col-start-1 row-start-2 row-end-3 flex flex-col items-center">
        <div className="grow" />
        <div className="w-full h-5 bg-[linear-gradient(to_right,var(--color-theme),transparent_15%)] opacity-50" />
        <div className="w-full h-5 bg-[linear-gradient(to_right,var(--color-theme),transparent_20%)] opacity-70" />
        <div className="w-full h-5 bg-[linear-gradient(to_right,var(--color-theme),transparent_35%)] opacity-85" />
        <div className="w-full h-5 bg-[linear-gradient(to_right,var(--color-theme),transparent_75%)]" />
        <div className="w-full h-7.5 bg-(--color-theme)" />
        <Copyright className="w-full col-start-1 row-start-3 text-(--color-theme)" />
      </div>
    </div>
  );
}
