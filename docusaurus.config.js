// @ts-check

const React = require('react');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    backendUrl: 'https://seafarmers.onrender.com', // Specify backend server URL here
   // backendUrl: 'http://localhost:3000',
  },
};

module.exports = config; // Ensure this file is exporting properly
