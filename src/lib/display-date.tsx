import { getGZ, toLunar } from "lunar-ts";

export function getGeorgianMonthNotation(date: Date): string | undefined {
  return getGeorgianMonth(date.getMonth() + 1);
}

export function getLunarYearNotation(date: Date): string | undefined {
  return getGZ(date.getTime());
}

export function getLunarMonthNotation(date: Date): LunarMonth | undefined {
  const lunarMonth = toLunar(date.getTime())?.lMonth;
  if (lunarMonth != null) {
    return getLunarMonth(lunarMonth);
  }
}

export function getLunarDateNotation(date: Date): LunarDate | undefined {
  const lunarDay = toLunar(date.getTime())?.lDay;
  if (lunarDay != null) {
    return getLunarDate(lunarDay);
  }
}

export function getYoubiNameNotation(date: Date): YoubiName | undefined {
  const weekday = date.getDay();
  return getYoubiName(weekday);
}

export const georgianMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export type GeorgianMonth = (typeof georgianMonths)[number];

export function getGeorgianMonth(ordinal: number): GeorgianMonth | undefined {
  return georgianMonths[(ordinal - 1) % 12];
}

export function getOrdinalOfGeorgianMonth(month: GeorgianMonth): number {
  return georgianMonths.indexOf(month) + 1;
}

export const lunarMonths = [
  "正",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "冬",
  "蜡",
] as const;

export type LunarMonth = (typeof lunarMonths)[number];

export function getLunarMonth(ordinal: number): LunarMonth | undefined {
  return lunarMonths[(ordinal - 1) % 12];
}

export function getOrdinalOfLunarMonth(month: LunarMonth): number {
  return lunarMonths.indexOf(month) + 1;
}

export const lunarDates = [
  "初一",
  "初二",
  "初三",
  "初四",
  "初五",
  "初六",
  "初七",
  "初八",
  "初九",
  "初十",
  "十一",
  "十二",
  "十三",
  "十四",
  "十五",
  "十六",
  "十七",
  "十八",
  "十九",
  "二十",
  "廿一",
  "廿二",
  "廿三",
  "廿四",
  "廿五",
  "廿六",
  "廿七",
  "廿八",
  "廿九",
  "三十",
] as const;

export type LunarDate = (typeof lunarDates)[number];

export function getLunarDate(ordinal: number): LunarDate | undefined {
  return lunarDates[(ordinal - 1) % 30];
}

export function getOrdinalOfLunarDate(day: LunarDate): number {
  return lunarDates.indexOf(day) + 1;
}

export const youbiNames = ["日", "月", "火", "水", "木", "金", "土"] as const;

export type YoubiName = (typeof youbiNames)[number];

export function getYoubiName(ordinal: number): YoubiName | undefined {
  return youbiNames[ordinal % 7]; // weekend is 0 (7) and 6, so ordinal 1-5 maps to index 0-5 directly
}

export function getOrdinalOfYoubiName(youbi: YoubiName): number {
  return youbiNames.indexOf(youbi) + 1;
}
