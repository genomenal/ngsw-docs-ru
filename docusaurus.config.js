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
            copyright: `© 2019-2023 Novel Software Systems. Все права защищены.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        algolia: {
            apiKey: 'dbf798e1335cbc57fae603c4eb582fe4',
            indexName: 'ngsw-ru',
            appId: 'DZAOFCP7KJ',
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
