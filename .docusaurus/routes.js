import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/SeaFarmers/__docusaurus/debug',
    component: ComponentCreator('/SeaFarmers/__docusaurus/debug', '076'),
    exact: true
  },
  {
    path: '/SeaFarmers/__docusaurus/debug/config',
    component: ComponentCreator('/SeaFarmers/__docusaurus/debug/config', 'dbd'),
    exact: true
  },
  {
    path: '/SeaFarmers/__docusaurus/debug/content',
    component: ComponentCreator('/SeaFarmers/__docusaurus/debug/content', 'c5f'),
    exact: true
  },
  {
    path: '/SeaFarmers/__docusaurus/debug/globalData',
    component: ComponentCreator('/SeaFarmers/__docusaurus/debug/globalData', '684'),
    exact: true
  },
  {
    path: '/SeaFarmers/__docusaurus/debug/metadata',
    component: ComponentCreator('/SeaFarmers/__docusaurus/debug/metadata', '0d1'),
    exact: true
  },
  {
    path: '/SeaFarmers/__docusaurus/debug/registry',
    component: ComponentCreator('/SeaFarmers/__docusaurus/debug/registry', '10c'),
    exact: true
  },
  {
    path: '/SeaFarmers/__docusaurus/debug/routes',
    component: ComponentCreator('/SeaFarmers/__docusaurus/debug/routes', 'c0a'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog',
    component: ComponentCreator('/SeaFarmers/blog', '2a3'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/archive',
    component: ComponentCreator('/SeaFarmers/blog/archive', '818'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/authors',
    component: ComponentCreator('/SeaFarmers/blog/authors', '203'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/SeaFarmers/blog/authors/all-sebastien-lorber-articles', '7c8'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/authors/yangshun',
    component: ComponentCreator('/SeaFarmers/blog/authors/yangshun', '3df'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/first-blog-post',
    component: ComponentCreator('/SeaFarmers/blog/first-blog-post', '1f6'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/long-blog-post',
    component: ComponentCreator('/SeaFarmers/blog/long-blog-post', '441'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/mdx-blog-post',
    component: ComponentCreator('/SeaFarmers/blog/mdx-blog-post', 'b93'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/tags',
    component: ComponentCreator('/SeaFarmers/blog/tags', 'e10'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/tags/docusaurus',
    component: ComponentCreator('/SeaFarmers/blog/tags/docusaurus', '628'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/tags/facebook',
    component: ComponentCreator('/SeaFarmers/blog/tags/facebook', 'c8d'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/tags/hello',
    component: ComponentCreator('/SeaFarmers/blog/tags/hello', 'ae6'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/tags/hola',
    component: ComponentCreator('/SeaFarmers/blog/tags/hola', '9a4'),
    exact: true
  },
  {
    path: '/SeaFarmers/blog/welcome',
    component: ComponentCreator('/SeaFarmers/blog/welcome', '3f8'),
    exact: true
  },
  {
    path: '/SeaFarmers/modules/LearnToCode/HowToCode',
    component: ComponentCreator('/SeaFarmers/modules/LearnToCode/HowToCode', '03d'),
    exact: true
  },
  {
    path: '/SeaFarmers/modules/LearnToCode/LearnToCodeHome',
    component: ComponentCreator('/SeaFarmers/modules/LearnToCode/LearnToCodeHome', 'b65'),
    exact: true
  },
  {
    path: '/SeaFarmers/modules/LearnToCode/TestPage',
    component: ComponentCreator('/SeaFarmers/modules/LearnToCode/TestPage', 'f65'),
    exact: true
  },
  {
    path: '/SeaFarmers/modules/Novice/NoviceHome',
    component: ComponentCreator('/SeaFarmers/modules/Novice/NoviceHome', 'b6f'),
    exact: true
  },
  {
    path: '/SeaFarmers/my-markdown-page',
    component: ComponentCreator('/SeaFarmers/my-markdown-page', '9e5'),
    exact: true
  },
  {
    path: '/SeaFarmers/my-react-page',
    component: ComponentCreator('/SeaFarmers/my-react-page', '388'),
    exact: true
  },
  {
    path: '/SeaFarmers/docs',
    component: ComponentCreator('/SeaFarmers/docs', '556'),
    routes: [
      {
        path: '/SeaFarmers/docs',
        component: ComponentCreator('/SeaFarmers/docs', '592'),
        routes: [
          {
            path: '/SeaFarmers/docs',
            component: ComponentCreator('/SeaFarmers/docs', 'b9a'),
            routes: [
              {
                path: '/SeaFarmers/docs/category/tutorial---basics',
                component: ComponentCreator('/SeaFarmers/docs/category/tutorial---basics', '074'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/category/tutorial---extras',
                component: ComponentCreator('/SeaFarmers/docs/category/tutorial---extras', '9a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/hello',
                component: ComponentCreator('/SeaFarmers/docs/hello', '800'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/intro',
                component: ComponentCreator('/SeaFarmers/docs/intro', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-basics/congratulations', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-basics/create-a-blog-post', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-basics/create-a-document', '94e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-basics/create-a-page', '492'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-basics/deploy-your-site', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-basics/markdown-features', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-extras/manage-docs-versions', 'b71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SeaFarmers/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/SeaFarmers/docs/tutorial-extras/translate-your-site', '110'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/SeaFarmers/',
    component: ComponentCreator('/SeaFarmers/', 'c15'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
