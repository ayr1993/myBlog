import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myBlog/', // 重点！和仓库名字一模一样，大小写注意
  title: "道理我都懂的博客~",
  description: "做人最重要的是开心 ",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
    ],
	sitemap: {
	  hostname: "https:   //你的域名.com",
	  lastUpdated: true   // 自动带上文章更新时间 <lastmod>
   }
  }
})
