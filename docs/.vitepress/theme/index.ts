import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from './components/Giscus.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 文章正文结束之后挂载评论组件
      'doc-after': () => h(Giscus)
    })
  }
}
