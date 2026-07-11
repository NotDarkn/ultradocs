import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://ultradocs.pages.dev",

  logo: "https://files.catbox.moe/81b5na.png",

  repo: "NotDarkn/ULTRADOCS",

  docsDir: "docs",

  darkmode: "enable",

  navbar,

  sidebar,

  displayFooter: true,
  
  footer: "Made with 💜 by ULTRAKILL Speedrunners",

  metaLocales: {
    editLink: "Wanna help us? Click here!",
  },

  contributors: false,

  editLink: false,

  print: false,

  lastUpdated: false,

  copyright: false,
  
  plugins: {

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
      assets: "fontawesome",
    },
  },
});
