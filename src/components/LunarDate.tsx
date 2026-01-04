import { cn } from "@/lib/cn";
import {
  getLunarDayNotation,
  getLunarMonthNotation,
  getLunarYearNotation,
} from "@/lib/display-date";
import * as React from "react";

export default function LunarDate({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const lunarYear = getLunarYearNotation(new Date());
  const lunarDate = `${getLunarMonthNotation(
    new Date()
  )}月${getLunarDayNotation(new Date())}`;
  return (
    <div
      {...props}
      className={cn(
        "w-full font-(family-name:--font-zhuzimincho) flex flex-col justify-center items-center",
        props.className
      )}
    >
      <div className="w-full pt-[5%] pb-[5%] bg-(--color-theme) text-white  dark:text-black">
        <svg width="100%" viewBox="0 0 20 10" fill="currentColor">
          <text
            x="50%"
            y="50%"
            fontSize="9.25"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {lunarYear}
          </text>
        </svg>
      </div>
      <div className="w-full mt-[10%] text-(--color-theme)">
        <svg width="100%" viewBox="0 0 40 10" fill="currentColor">
          <text
            x="50%"
            y="50%"
            fontSize="10"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {lunarDate}
          </text>
        </svg>
      </div>
    </div>
  );
}
