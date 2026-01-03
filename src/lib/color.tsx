import convert from "color-convert";

/**
 * Simple hash function for consistent date-based color generation.
 */
function hashDate(date: Date): number {
  const dateStr = date.toISOString().split("T")[0] ?? ""; // YYYY-MM-DD
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash = hash & hash; // convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Converts HSL to hex color.
 */
function hslToHex(h: number, s: number, l: number): string {
  const hex = convert.hsl.hex([h, s, l]);
  return `#${hex}`;
}

/**
 * Generates a pair of low-saturation colors for light and dark modes
 * based on the hash of the given date.
 *
 * @param date - the date to generate colors for
 * @returns an object with light and dark mode colors as Tailwind-compatible hex strings
 */
export function getDateColors(date: Date): { light: string; dark: string } {
  const hash = hashDate(date);

  // Generate hue from hash (0-360 degrees)
  const hue = hash % 360;

  // Low saturation (15-25%)
  const saturation = 15 + (hash % 11);

  // Light mode: lighter color (75-85% lightness)
  const lightLightness = 75 + (hash % 11);

  // Dark mode: darker color (20-30% lightness)
  const darkLightness = 20 + (hash % 11);

  return {
    light: hslToHex(hue, saturation, lightLightness),
    dark: hslToHex(hue, saturation, darkLightness),
  };
}

/**
 * Generates a single low-saturation color for a specific mode.
 *
 * @param date - the date to generate color for
 * @param mode - 'light' or 'dark' mode
 * @returns a Tailwind-compatible hex color string
 */
export function getDateColor(date: Date, mode: "light" | "dark"): string {
  const colors = getDateColors(date);
  return colors[mode];
}
