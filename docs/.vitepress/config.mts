import { defineConfig } from 'vitepress';
// auto_sidebar
import { set_sidebar } from './config/set_sidebar.ts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "纯白精选",
  description: "公众号，运营笔记，网站记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '小程序', link: '/miniapp/' },
      { text: '公众号', link: '/mp/' },
    ],
    outline: 'deep',
    outlineTitle: '页面目录',
    sidebar: { '/miniapp': set_sidebar('miniapp'), '/mp': set_sidebar('mp') },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/inshub' }
    ]
  },
  ignoreDeadLinks: true
})
