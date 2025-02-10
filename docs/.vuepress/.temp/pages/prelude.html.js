import comp from "C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/prelude.html.vue"
const data = JSON.parse("{\"path\":\"/prelude.html\",\"title\":\"Prelude\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"prelude.md\"}")
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
