// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Some things from the mind of Andy Hawkes',
  tagline: 'Some general guff and links from a guy who is variously: VP Product Engineering & Architecture at Deltatre, a tinkerer / maker and breaker of things, a biker, a bespoke liqueur maker, a craft beer aficionado, and an apprentice polymath (AKA an easily distracted semi-professional geek with no other qualifications in anything tangible or useful in the real world). All opinions are my own (or shamelessly stolen).',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.andyhawkes.co.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'andyhawkes', // Usually your GitHub org/user name.
  projectName: 'andyhawkes-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'writing', // This changes the base path from /docs to /guide
          path: './writing', // folder where your markdown files live (can be renamed too)
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-YBQB7WD1VG',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/AJH-logotype-cursive.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Andy Hawkes logo',
          src: 'img/AJH-logotype-cursive.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'mySidebar',
          //   position: 'left',
          //   label: 'Writing',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Writing',
          //   items: [
          //     {
          //       label: 'The Ultimatum',
          //       to: '/writing/the-ultimatum',
          //     },
          //     {
          //       label: 'The man who forgot himself',
          //       to: '/writing/the-man-who-forgot-himself'
          //     },
          //   ],
          // },
          {
            title: 'CV / Resume',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/andyhawkes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/andyhawkes',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/andyhawkes.bsky.social',
              }
            ],
          },
        ],
        copyright: `Copyright &copy; ${new Date().getFullYear()} Andy Hawkes`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
