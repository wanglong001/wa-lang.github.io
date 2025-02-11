import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import { ICONS } from './constants'
import { generateSidebarItems } from './helper/sidebarItems'
import HighlightedExt from './plugins/highlightedExt'

export default async () => defineConfig({
  lang: 'zh-CN',
  title: '凹语言',
  description: '针对 WASM 平台设计的通用编程语言',
  appearance: true,

  themeConfig: {
    logo: '/favicon.svg',

    editLink: {
      pattern: 'https://github.com/wa-lang/wa-lang.github.io/edit/master/docs/:path',
      text: '为此页提供修改建议',
    },

    algolia: {
      appId: '3401L2T8D6',
      apiKey: '98dd501bfa6f60574e303792007e262c',
      indexName: 'wa-lang',
    },

    nav: [
      { text: '开始', link: '/guide/', activeMatch: '/guide/' },
      { text: '文档', link: '/reference/', activeMatch: '/reference/' },
      { text: '案例', link: '/examples/', activeMatch: '/examples/' },
      { text: '碎碎念', link: '/smalltalk/', activeMatch: '/smalltalk/' },
      { text: '社区', link: '/community/', activeMatch: '/community/' },
      { text: 'English', link: '/en/', activeMatch: '/en/' },
      { text: 'Play', link: 'https://wa-lang.org/playground/' },
    ],

    socialLinks: [
      { icon: { svg: ICONS.discourse }, link: 'https://zh-lang.osanswer.net/c/walang' },
      { icon: { svg: ICONS.oschina }, link: 'https://my.oschina.net/walang' },
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/wa-lang/wa' },
      { icon: 'github', link: 'https://github.com/wa-lang/wa/' },
      { icon: 'twitter', link: 'https://twitter.com/wayuyan' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '项目目标', link: '/guide/goals' },
            { text: '历史版本', link: '/guide/changelog' },
          ],
        },
      ],
      '/reference/': [
        {
          text: '文档',
          items: [
            { text: '快速入门', link: '/reference/' },
            { text: '语言规范', link: '/reference/spec' },
          ],
        },
      ],
      '/examples/': [
        {
          text: '案例',
          items: [
            { text: '小游戏', link: '/examples/' },
          ],
        },
      ],
      '/smalltalk/': [
        {
          text: '碎碎念',
          collapsed: true,
          items: [
            { text: '栏目投稿规则', link: '/smalltalk/' },
            ...generateSidebarItems('smalltalk'),
          ],
        },
      ],
      '/community/': [
        {
          text: '社区',
          items: [
            { text: '凹语言社区', link: '/community/' },
            { text: '如何贡献代码', link: '/community/contribute' },
            { text: '凹语言贡献者协议', link: '/community/wca' },
            { text: '版权信息', link: '/community/license' },
          ],
        },
        {
          text: '凹语言提案',
          collapsed: true,
          items: [...generateSidebarItems('proposal')],
        },
        {
          text: '开发组会议',
          collapsed: false,
          items: [
            { text: '开发组会议安排', link: '/community/conference/' },
            ...generateSidebarItems('conference'),
          ],
        },
      ],
      '/en/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/en/' },
            { text: 'Quick Start', link: '/en/guide/quick-start' },
            { text: 'Playground', link: '/en/guide/playground' },
            { text: 'Example: Prime', link: '/en/guide/example-prime' },
            { text: 'Run as Go Script', link: '/en/guide/as-go-script' },
          ],
        },
        {
          text: 'Blog',
          items: [
            { text: 'The Wa Blog', link: '/en/blog/' },
            { text: 'Fleet: Wa Highlight', link: '/en/blog/blog0001.md' },
            { text: 'Wa Language and Turing & BrainFuck', link: '/en/blog/blog0002.md' },
          ],
        },
      ],
    },

    footer: {
      copyright: '版权 ©️ 凹语言开发组 2018，保留权利',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8',
      ),
    ],
  ],

  markdown: {
    highlight: await HighlightedExt(),
  },

})
