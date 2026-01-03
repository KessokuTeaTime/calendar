import {
  getLunarDayNotation,
  getLunarMonthNotation,
  getLunarYearNotation,
} from "@/lib/display-date";

export default function LunarDate() {
  const lunarYear = getLunarYearNotation(new Date());
  const lunarDate = `${getLunarMonthNotation(
    new Date()
  )}月${getLunarDayNotation(new Date())}`;
  return (
    <div
      className={`w-full font-(family-name:--font-zhuzimincho) flex flex-col justify-center items-center`}
    >
      <div className="w-full pt-[5%] bg-(--color-theme-light) text-white dark:bg-(--color-theme-dark) dark:text-black">
        <svg width="100%" viewBox="0 0 20 10" fill="currentColor">
          <text
            x="50%"
            y="5%"
            fontSize="9.25"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="hanging"
          >
            {lunarYear}
          </text>
        </svg>
      </div>
      <div className="w-full mt-[10%] text-(--color-theme-light) dark:text-(--color-theme-dark)">
        <svg width="100%" viewBox="0 0 40 10" fill="currentColor">
          <text
            x="50%"
            y="5%"
            fontSize="10"
            textAnchor="middle"
            dominantBaseline="hanging"
          >
            {lunarDate}
          </text>
        </svg>
      </div>
    </div>
  );
}
