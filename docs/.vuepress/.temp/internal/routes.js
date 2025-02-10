export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/guides/get-started.html", { loader: () => import(/* webpackChunkName: "guides_get-started.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/guides/get-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guides/speedrun-tech.html", { loader: () => import(/* webpackChunkName: "guides_speedrun-tech.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/guides/speedrun-tech.html.js"), meta: {"title":"Speedrun Tech"} }],
  ["/guides/any/any-choosing.html", { loader: () => import(/* webpackChunkName: "guides_any_any-choosing.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/guides/any/any-choosing.html.js"), meta: {"title":"Any% (Choosing Layer)"} }],
  ["/guides/any/layer/any-prelude.html", { loader: () => import(/* webpackChunkName: "guides_any_layer_any-prelude.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/guides/any/layer/any-prelude.html.js"), meta: {"title":"Prelude"} }],
  ["/guides/any/level/any-0-3.html", { loader: () => import(/* webpackChunkName: "guides_any_level_any-0-3.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/guides/any/level/any-0-3.html.js"), meta: {"title":"hi"} }],
  ["/guides/any/level/any-1-4.html", { loader: () => import(/* webpackChunkName: "guides_any_level_any-1-4.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/guides/any/level/any-1-4.html.js"), meta: {"title":"1-4 yay"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
