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

  headTags: [
    // Open Graph meta tags
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'en_GB',
      },
    },
    // JSON-LD Structured Data for Person/Organization
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Andy Hawkes',
        'url': 'https://www.andyhawkes.co.uk',
        'image': 'https://www.andyhawkes.co.uk/img/mugshot.jpg',
        'sameAs': [
          'https://github.com/andyhawkes',
          'https://linkedin.com/in/andyhawkes',
          'https://bsky.app/profile/andyhawkes.bsky.social',
        ],
        'jobTitle': 'VP Product Engineering & Architecture',
        'affiliation': {
          '@type': 'Organization',
          'name': 'Deltatre',
          'url': 'https://www.deltatre.com',
        },
      }),
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/mugshot.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Andy Hawkes logo',
          src: 'img/AJH-logotype-cursive.png',
        },
        items: [
          {to: '/thinking', label: 'Thinking', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/projects', label: 'Projects', position: 'left'},
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
            title: 'Personal info',
            items: [
              {
                label: 'About me',
                to: '/about',
              },
              {
                label: 'Career timeline',
                to: '/about/career-timeline',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/andyhawkes',
              },
            ],
          },
          {
            title: 'Personal projects',
            items: [
              {
                label: 'Chef-o-tron',
                to: 'https://chef-o-tron.andyhawkes.co.uk',
              },
              {
                label: 'Drink-o-tron',
                to: 'https://drink-o-tron.andyhawkes.co.uk',
              },
              {
                label: 'Work clock',
                to: 'https://github.com/andyhawkes/work-clock',
              }
            ],
          },
          {
            title: 'More by me',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'Writing',
              //   to: '/writing',
              // },
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
