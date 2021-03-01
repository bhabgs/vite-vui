/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-26 15:22:42
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-03-01 10:15:25
 */
module.exports = {
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: '足生的个人博客' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 引入 Gitalk
    [
      'link',
      { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' },
    ],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
  ],
  title: 'Vite vui',
  themeConfig: {
    search: true,
    // 保存解析 Markdown 的元数据
    sidebar: {
      '/': [
        {
          text: 'vui',
          children: [
            { text: '介绍', link: '/' },
            { text: 'Button', link: '/components/button/' },
          ],
        },
        {
          text: 'vuu',
          children: [
            { text: '介绍', link: '/vuu/' },
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
