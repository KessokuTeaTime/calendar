import "./index.css";

import * as React from "react";
import { getDateColors } from "./lib/color";
import { useMediaQuery } from "@mantine/hooks";
import BannerCalendarLayout from "./layouts/BannerCalendarLayout";
import NarrowCalendarLayout from "./layouts/NarrowCalendarLayout";
import ModerateCalendarLayout from "./layouts/ModerateCalendarLayout";
import SquareCalendarLayout from "./layouts/SquareCalendarLayout";

export function App() {
  const isModerate = useMediaQuery(
    "only screen and (min-aspect-ratio: 1/2) and (max-aspect-ratio: 3/4)"
  );
  const isSquare = useMediaQuery(
    "only screen and (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)"
  );
  const isBanner = useMediaQuery("only screen and (min-aspect-ratio: 1/1)");
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
      {isBanner ? (
        <BannerCalendarLayout className="h-full w-full" />
      ) : isModerate ? (
        <ModerateCalendarLayout className="h-full w-full" />
      ) : isSquare ? (
        <SquareCalendarLayout className="h-full w-full" />
      ) : (
        <NarrowCalendarLayout className="h-full w-full" />
      )}
    </div>
  );
}

export default App;
