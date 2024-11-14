import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import synthwave from './src/theme/prism.synthwave'

const config: Config = {
  title: 'Iona-lang',
  tagline: 'The Iona Programming Language',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ionalang.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'broken-bytes', // Usually your GitHub org/user name.
  projectName: 'Iona', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/broken-bytes/iona-lang',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/broken-bytes/iona-lang',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/iona-social-card.png',
    navbar: {
      title: 'Iona Programming Language',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/broken-bytes/iona',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Broken Bytes (Marcel Kulina), Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: synthwave,
    },
    colorMode: {
      defaultMode: 'dark',  // Set your preferred default mode (light or dark)
      disableSwitch: true,  // Disable the mode switch toggle
      respectPrefersColorScheme: false, // Ignore user's browser preference
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
