import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dalamud 开发文档',
  tagline: '最终幻想 XIV 插件开发框架',
  favicon: 'img/favicon.ico',

  url: 'https://QianChangUwU.github.io',
  baseUrl: '/Dalamud.Dev.Chinese/',

  organizationName: 'QianChangUwU',
  projectName: 'Dalamud.Dev.Chinese',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogTitle: '新闻动态',
          blogDescription: 'Dalamud 开发新闻与更新',
          postsPerPage: 10,
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/dalamud-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Dalamud 开发文档',
      logo: {
        alt: 'Dalamud Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '新闻', position: 'left'},
        {
          href: 'https://github.com/goatcorp/Dalamud',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {label: '简介', to: '/docs/intro'},
            {label: '插件开发', to: '/docs/plugin-development/getting-started'},
            {label: '发布插件', to: '/docs/plugin-publishing/'},
          ],
        },
        {
          title: '社区',
          items: [
            {label: 'Discord', href: 'https://discord.gg/holdshift'},
            {label: '行为准则', to: '/docs/code-of-conduct'},
          ],
        },
        {
          title: '更多',
          items: [
            {label: '新闻', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/goatcorp/Dalamud'},
          ],
        },
      ],
      copyright: `Final Fantasy XIV © 2010-${new Date().getFullYear()} SQUARE ENIX CO., LTD. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
