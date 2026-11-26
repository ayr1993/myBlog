import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/myBlog/',
  title: "道理我都懂的博客~",
  description: "做人最重要的是开心 ",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/myBlog/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '动态', link: '/articles/vitepress-seo-optimize' }
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '第一条博客', link: '/articles/vitepress-seo-optimize' }
        ]
      },
      {
        text: '分享',
        items: [
          { text: '第二条记录', link: '/articles/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  sitemap: {
    hostname: "https://ayr1993.github.io",
    lastUpdated: true
  }
})