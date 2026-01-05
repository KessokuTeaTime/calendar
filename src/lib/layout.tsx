import { useMediaQuery } from "@mantine/hooks";

export type Layout = "narrow" | "moderate" | "square" | "banner" | "flag";

export function useLayout(): Layout {
  const isModerateLayout = useMediaQuery(
    "only screen and (min-aspect-ratio: 1/2)"
  );
  const isSquareLayout = useMediaQuery(
    "only screen and (min-aspect-ratio: 3/4)"
  );
  const isBannerLayout = useMediaQuery(
    "only screen and (min-aspect-ratio: 1/1)"
  );
  const isFlagLayout = useMediaQuery("only screen and (min-aspect-ratio: 5/3)");

  if (isFlagLayout) {
    return "flag";
  } else if (isBannerLayout) {
    return "banner";
  } else if (isSquareLayout) {
    return "square";
  } else if (isModerateLayout) {
    return "moderate";
  } else {
    return "narrow";
  }
}
