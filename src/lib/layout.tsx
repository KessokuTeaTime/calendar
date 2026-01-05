import { useMediaQuery } from "@mantine/hooks";

export type Layout = "narrow" | "moderate" | "square" | "banner" | "flag";

function getMinAspectRatio(layout: Layout): string | undefined {
  switch (layout) {
    case "narrow":
      return undefined;
    case "moderate":
      return "1/2";
    case "square":
      return "3/4";
    case "banner":
      return "1/1";
    case "flag":
      return "16/9";
  }
}

function query(minRatio?: string, maxRatio?: string): boolean {
  if (minRatio === undefined && maxRatio === undefined) {
    // always succeed
    return true;
  }

  let query = ["only screen"];
  if (minRatio !== undefined) {
    query.push(`(min-aspect-ratio: ${minRatio})`);
  }
  if (maxRatio !== undefined) {
    query.push(`(max-aspect-ratio: ${maxRatio})`);
  }

  return useMediaQuery(query.join(" and "));
}

export function useLayout(): Layout {
  const isFlag = query(getMinAspectRatio("flag"));
  const isBanner = query(getMinAspectRatio("banner"));
  const isSquare = query(getMinAspectRatio("square"));
  const isModerate = query(getMinAspectRatio("moderate"));

  if (isFlag) {
    return "flag";
  } else if (isBanner) {
    return "banner";
  } else if (isSquare) {
    return "square";
  } else if (isModerate) {
    return "moderate";
  } else {
    return "narrow";
  }
}
