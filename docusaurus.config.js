const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Genomenal',
    tagline: 'Dinosaurs are cool',
    url: 'https://genomenal.ru',
    baseUrl: '/ngsw-docs-ru/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'genomenal', // Usually your GitHub org/user name.
    projectName: 'ngsw-docs-ru', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: '',
            logo: {
                alt: 'Genomenal Logo',
                src: 'img/app-logo.svg',
                srcDark: 'img/app-logo-white.svg',
                href: 'https://genomenal.ru',
            },
            items: [],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `© 2019-2025 Novel Software Systems. Все права защищены.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        algolia: {
            apiKey: 'd044e3c24c06c1a02d95052238b1eaee',
            indexName: 'ngsw-ru',
            appId: '7QED0LN5K8',
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
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'eu'],
        localeConfigs: { },
            },
};
