<template>
  <div v-if="enabled" class="giscus-wrapper" style="margin-top: 24px;">
    <div id="giscus-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

// 文章 frontmatter 里写 comment: false 可关闭评论
const enabled = frontmatter.value.comment !== false

function initGiscus() {
  const container = document.getElementById('giscus-container')
  if (!container) return
  container.innerHTML = '' // 清空旧实例(切换路由时重建)

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('data-repo', 'ayr1993/myBlog')
  script.setAttribute('data-repo-id', 'R_kgDOV8debw')
  script.setAttribute('data-category', 'Comments')
  script.setAttribute('data-category-id', 'DIC_kwDOV8deb84DL_4f')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', currentTheme())
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  container.appendChild(script)
}

function currentTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

// 明暗主题切换:监听 <html> 的 class 变化,通过 postMessage 通知 giscus iframe
let observer: MutationObserver | null = null
function notifyTheme() {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: currentTheme() } } },
    'https://giscus.app'
  )
}

onMounted(() => {
  if (!enabled) return
  initGiscus()
  observer = new MutationObserver(notifyTheme)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

// SPA 路由切换后重建评论框(每篇文章评论区独立)
watch(() => route.path, () => {
  if (enabled) initGiscus()
})

onBeforeUnmount(() => observer?.disconnect())
</script>
