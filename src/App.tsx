import type React from "react";
import LunarDate from "./components/LunarDate";
import "./index.css";
import { getDateColors } from "./lib/color";

export function App() {
  const colors = getDateColors(new Date());
  return (
    <div
      style={
        {
          "--color-theme-light": colors.light,
          "--color-theme-dark": colors.dark,
        } as React.CSSProperties
      }
      className="h-full w-full flex justify-center items-center bg-white dark:bg-black"
    >
      <LunarDate />
    </div>
  );
}

export default App;
