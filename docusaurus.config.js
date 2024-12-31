import React from 'react'; 
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
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

export default config;
