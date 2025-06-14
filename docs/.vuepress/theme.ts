import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://ultradocs.pages.dev",

  logo: "https://i.imgur.com/3aKZ4Ro.png",

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
