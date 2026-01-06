import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { getDateColors } from "./lib/color";
import logo from "@/logo.svg";

export function Head() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const colors = getDateColors(new Date());
  const [faviconUrl, setFaviconUrl] = useState<string>("");

  useEffect(() => {
    const color = isDark ? colors.dark : colors.light;

    fetch(logo)
      .then((res) => res.text())
      .then((logoSvg) => {
        const coloredSvg = logoSvg.replace(/currentColor/g, color);
        const url = `data:image/svg+xml,${encodeURIComponent(coloredSvg)}`;
        setFaviconUrl(url);
      });
  }, [isDark, colors, logo]);

  return (
    <>
      {faviconUrl && <link rel="icon" type="image/svg+xml" href={faviconUrl} />}
      <title>Equinox Parterre: Calendar</title>
    </>
  );
}

export default Head;
