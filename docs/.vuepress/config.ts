import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "ULTRADOCS",
  description: "Documentation for all speedrun-related tech in ULTRAKILL",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

});
