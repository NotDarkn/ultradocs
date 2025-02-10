import comp from "D:/special stuff for ultrakill guides/ultradocs/docs/.vuepress/.temp/pages/guides/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/guides/get-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"guides/get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
