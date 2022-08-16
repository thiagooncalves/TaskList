import { globalCss } from "../src/stitches.config.js";

export const globalStyles = globalCss("fonte", {
    '@font-face': {
      fontFamily: 'Exo',
      src: 'local("Exo-Regular") url("Exo-Regular.woff2")',
    }
  })