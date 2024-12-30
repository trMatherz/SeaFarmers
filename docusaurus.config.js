// @ts-check

const React = require('react');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sea Farmers',
  tagline: 'Dinos are cool',
  favicon: 'img/favicon.ico',
  url: 'https://trmatherz.github.io',
  baseUrl: '/SeaFarmers/',
  organizationName: 'trMatherz',
  projectName: 'SeaFarmers',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.startsWith('/auth')) {
            return ['/auth/*'];
          }
          return [];
        },
      },
    ],
  ],
  customFields: {
    backendUrl: 'https://seafarmers.onrender.com', 
   // backendUrl: 'http://localhost:3000',
  },
};

module.exports = config; 
