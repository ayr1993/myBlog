---
outline: deep
---

# 运行时 API 示例

本页面演示 VitePress 提供的部分运行时 API 的用法。

核心的 `useData()` API 可以用来获取站点、主题以及当前页面的数据，在 `.md` 和 `.vue` 文件里都可以使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 展示结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面头部元数据
<pre>{{ frontmatter }}</pre>
