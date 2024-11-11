// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const navbarItems = [
  {
    label: 'Learn To Code',
    to: '/SeaFarmers/modules/LearnToCode/LearnToCodeHome',
  },
  {
    label: 'Novice',
    to: '/SeaFarmers/modules/Novice/NoviceHome',
  },
];

const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://trmatherz.github.io/',
  baseUrl: '/SeaFarmers/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
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
    navbar: {
      title: 'Sea Farmers',
      items: [
        {
          type: 'dropdown',
          label: 'Sections',
          position: 'left',
          className: 'navbar-sections', // Add custom class
          items: navbarItems,  // Use navbarItems here
        },
      ],
    },
    customCss: './src/css/custom.css',
    colorMode: {
      disableSwitch: true,
    },
  },
  customFields: {
    navbarItems,  // This makes navbarItems available through customFields
  },
};

export default config;
