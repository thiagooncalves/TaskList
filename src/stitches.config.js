import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes } = createStitches({
  media: {
    xs: "(max-width: 480px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1200px)",
    xl: "(min-width: 1201px)",
  },
});