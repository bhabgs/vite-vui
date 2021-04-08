/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-26 15:22:42
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-08 13:27:07
 */

module.exports = {
  lang: 'en-US',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vite vui' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: 'Vite vui',
  base: '/vite-vui-docs/',
  themeConfig: {
    repo: 'bhabgs/vite-vui',
    sidebar: {
      '/': [
        {
          text: 'vui',
          children: [
            { text: '介绍', link: '/' },
            { text: '日志', link: '/components/log' },
            { text: 'Button', link: '/components/button/' },
            { text: 'Layout', link: '/components/layout/' },
            { text: 'contextmenu', link: '/components/contextmenu/' },
            { text: 'menu', link: '/components/menu/' },
            { text: 'tabsPage', link: '/components/tabsPage/' },
          ],
        },
        {
          text: 'vuu',
          children: [
            { text: '介绍', link: '/vuu/' },
            { text: '日志', link: '/vuu/log' },
            { text: '某个功能', link: '/vuu/any' },
          ],
        },
      ],
    },
    author: 'bhabgs',
    nav: [
      { text: '首页', link: '/' },
      // { text: '归档', link: '/docs' },
      { text: '分类', link: '/tags' },
    ],
  },
  dest: 'public',
};
