import { cn } from "@/lib/cn";
import Copyright from "../components/_copyright";
import CalendarWeekday from "@/components/calendar/calendar-weekday";
import CalendarYear from "@/components/calendar/calendar-year";
import CalendarMonth from "@/components/calendar/calendar-month";
import Vertical2DigitDate from "@/components/vertical-2-digit-date";
import CalendarLunarYear from "@/components/calendar/calendar-lunar-year";
import CalendarLunarDateMonth from "@/components/calendar/calendar-lunar-date-month";

export default function NarrowCalendarLayout({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const date = new Date();
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-[min(400px,36%)_1fr] grid-rows-[auto_1fr_auto]",
        props.className
      )}
    >
      {/* lunar date (left top) */}
      <div className="w-full flex flex-col justify-center items-center">
        <CalendarLunarYear
          className="w-full pt-[5%] pb-[5%] bg-(--color-theme) text-(--color-bg) font-extrabold"
          date={date}
          fill="currentColor"
        />
        <CalendarLunarDateMonth
          className="w-full mt-[10%] mb-[5%] text-(--color-theme) font-bold"
          date={date}
          fill="currentColor"
        />
      </div>

      {/* gradient (left middle) */}
      <div className="w-full h-full mt-auto col-start-1 row-start-2 flex flex-col items-center">
        <div className="w-full grow bg-[linear-gradient(to_bottom,transparent_55%,var(--color-theme))]" />
        <div className="w-full h-12 bg-(--color-theme)" />
      </div>

      {/* copyright (left bottom) */}
      <Copyright className="w-full h-full col-start-1 row-start-3 text-(--color-theme)" />

      {/* main content (right middle) */}
      <div className="w-full h-full col-start-2 row-start-2 flex flex-col text-(--color-theme)">
        <div className="w-[65%] flex flex-col">
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

        <Vertical2DigitDate
          className="w-[103.5%] grow -ml-[3.5%] -mt-[5%] text-(--color-theme) font-extrabold select-none"
          date={date}
        />
      </div>
    </div>
  );
}
