import "./index.css";

import * as React from "react";
import { getDateColors } from "./lib/color";
import { useMediaQuery } from "@mantine/hooks";
import BannerCalendarLayout from "./layouts/banner-calendar-layout";
import NarrowCalendarLayout from "./layouts/narrow-calendar-layout";
import ModerateCalendarLayout from "./layouts/moderate-calendar-layout";
import SquareCalendarLayout from "./layouts/square-calendar-layout";
import { useLayout } from "./lib/layout";
import FlagCalendarLayout from "./layouts/flag-calendar-layout";

export function App() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const layout = useLayout();
  const colors = getDateColors(new Date());
  return (
    <div
      style={
        {
          "--color-theme-light": colors.light,
          "--color-theme-dark": colors.dark,
          "--color-theme": `var(${
            isDark ? "--color-theme-dark" : "--color-theme-light"
          })`,
          "--color-bg": isDark ? "black" : "white",
        } as React.CSSProperties
      }
      className="h-full w-full flex justify-center items-center bg-(--color-bg) selection:bg-(--color-theme-light)/25 dark:selection:bg-(--color-theme-dark)/45"
    >
      {layout === "narrow" ? (
        <NarrowCalendarLayout className="h-full w-full" />
      ) : layout === "banner" ? (
        <BannerCalendarLayout className="h-full w-full" />
      ) : layout === "moderate" ? (
        <ModerateCalendarLayout className="h-full w-full" />
      ) : layout === "square" ? (
        <SquareCalendarLayout className="h-full w-full" />
      ) : layout === "flag" ? (
        <FlagCalendarLayout className="h-full w-full" />
      ) : null}
    </div>
  );
}

export default App;
