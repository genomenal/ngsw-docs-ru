const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Genomenal',
    tagline: 'Dinosaurs are cool',
    url: 'https://genomenal.ru',
    baseUrl: '/ngsw-docs-ru/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'RoadRoller', // Usually your GitHub org/user name.
    projectName: 'ngsw-docs-ru', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: '',
            logo: {
                alt: 'Genomenal Logo',
                src: 'img/app-logo.svg',
            },
            items: [],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `© 2019-2021 Novel Software Systems. All rights reserved.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        algolia: {
            apiKey: 'fd0be1a4b0953b8d432a3361f8bb1b67',
            indexName: 'ngsw-ru',
            appId: '7Q65UNCM90',
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    homePageId: 'intro',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/RoadRoller/ngsw-docs-ru/edit/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
