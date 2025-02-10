import comp from "C:/Users/Darkn/Documents/GitHub/ultradocs/docs/.vuepress/.temp/pages/guides/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/guides/get-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false},\"headers\":[],\"git\":{\"updatedTime\":1739210192000,\"contributors\":[{\"name\":\"Darkn\",\"username\":\"Darkn\",\"email\":\"privateservice000@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Darkn\"}]},\"filePathRelative\":\"guides/get-started.md\"}")
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
