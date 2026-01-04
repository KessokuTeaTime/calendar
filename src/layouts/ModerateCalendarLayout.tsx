import VerticalDate from "@/components/VerticalDate";
import Copyright from "@/components/Copyright";
import MonthSegment from "@/components/segments/MonthSegment";
import WeekdaySegment from "@/components/segments/WeekdaySegment";
import YearSegment from "@/components/segments/YearSegment";
import { cn } from "@/lib/cn";
import LunarYearSegment from "@/components/segments/LunarYearSegment";
import LunarDateSegment from "@/components/segments/LunarDateSegment";
import LunarMonthSegment from "@/components/segments/LunarMonthSegment";

export default function ModerateCalendarLayout({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const date = new Date();
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-[min(400px,30%)_1fr] grid-rows-[auto_auto_1fr]",
        props.className
      )}
    >
      {/* lunar year (left top) */}
      <LunarYearSegment
        className="w-full col-start-1 row-start-1 pt-[5%] pb-[5%] bg-(--color-theme) text-(--color-bg)"
        date={date}
        fill="currentColor"
      />

      {/* lunar month (left middle) */}
      <LunarMonthSegment
        className="w-[25%] col-start-1 row-start-2 ml-[50%] mr-auto mt-auto text-(--color-theme)"
        date={date}
        fill="currentColor"
      />

      {/* lunar date, gradient and copyright (left bottom) */}
      <div className="w-full h-full mt-auto col-start-1 row-start-3 flex flex-col items-center">
        <LunarDateSegment
          className="w-[25%] ml-[50%] mr-auto mt-[4%] text-(--color-theme)"
          date={date}
          fill="currentColor"
        />
        <div className="w-full grow bg-[linear-gradient(to_bottom,transparent_55%,var(--color-theme))]" />
        <div className="w-full h-12 bg-(--color-theme)" />
        <Copyright className="w-full text-(--color-theme)" />
      </div>

      {/* youbi and numeric year (right middle) */}
      <div className="w-full h-full col-start-2 row-start-2 flex flex-col text-(--color-theme)">
        <div className="w-[65%] flex flex-col">
          <WeekdaySegment className="w-full" date={date} fill="currentColor" />
          <YearSegment className="w-full" date={date} fill="currentColor" />
        </div>
      </div>

      {/* georgian month and numeric date (right bottom) */}
      <div className="w-full h-full col-start-2 row-start-3 flex flex-col text-(--color-theme)">
        <div className="w-[65%] flex flex-col">
          <MonthSegment className="w-full" date={date} fill="currentColor" />
        </div>
        <VerticalDate
          className="grow text-(--color-theme) select-none"
          date={date}
        />
      </div>
    </div>
  );
}
