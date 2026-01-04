import { cn } from "@/lib/cn";
import Copyright from "../components/Copyright";
import WeekdaySegment from "@/components/segments/WeekdaySegment";
import YearSegment from "@/components/segments/YearSegment";
import MonthSegment from "@/components/segments/MonthSegment";
import VerticalDate from "@/components/VerticalDate";
import LunarYearSegment from "@/components/segments/LunarYearSegment";
import LunarDateMonthSegment from "@/components/segments/LunarDateMonthSegment";

export default function NarrowCalendarLayout({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const date = new Date();
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-[min(400px,30%)_1fr] grid-rows-[auto_1fr]",
        props.className
      )}
    >
      {/* lunar date (left top) */}
      <div className="w-full flex flex-col justify-center items-center">
        <LunarYearSegment
          className="w-full pt-[5%] pb-[5%] bg-(--color-theme) text-(--color-bg)"
          date={date}
          fill="currentColor"
        />
        <LunarDateMonthSegment
          className="w-full mt-[10%] mb-[5%] text-(--color-theme)"
          date={date}
          fill="currentColor"
        />
      </div>

      {/* gradient and copyright (left bottom) */}
      <div className="w-full h-full mt-auto col-start-1 row-start-2 flex flex-col items-center">
        <div className="w-full grow bg-[linear-gradient(to_bottom,transparent_55%,var(--color-theme))]" />
        <div className="w-full h-12 bg-(--color-theme)" />
        <Copyright className="w-full text-(--color-theme)" />
      </div>

      {/* main content (right bottom) */}
      <div className="w-full h-full col-start-2 row-start-2 flex flex-col text-(--color-theme)">
        <div className="w-[65%] flex flex-col">
          <WeekdaySegment className="w-full" date={date} fill="currentColor" />
          <YearSegment className="w-full" date={date} fill="currentColor" />
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
