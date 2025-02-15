import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    icon: "house",
    link: "/",
  },
  {
    text: "Speedrun Tech",
    icon: "person-running",
    link: "/speedrun-tech",
  },
  {
    text: "General Info",
    icon: "book",
    link: "/general-info",
  },
]);

/**
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
**/