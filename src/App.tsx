import "./index.css";

import * as React from "react";
import { getDateColors } from "./lib/color";
import { useMediaQuery } from "@mantine/hooks";
import WideCalendarLayout from "./layouts/WideCalendarLayout";
import NarrowCalendarLayout from "./layouts/NarrowCalendarLayout";

export function App() {
  const isWide = useMediaQuery("only screen and (min-aspect-ratio: 1/1)");
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
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
      {isWide ? (
        <WideCalendarLayout className="h-full w-full" />
      ) : (
        <NarrowCalendarLayout className="h-full w-full" />
      )}
    </div>
  );
}

export default App;
