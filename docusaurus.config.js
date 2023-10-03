const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

const config = {
    title: 'Hackadia',
    tagline: 'Siber Güvenliğin Öncüleri...',
    url: 'https://Hackadiablog.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'facebook',
    projectName: 'docusaurus',
    markdown: {
        mermaid: true,
    },
    i18n: {
        defaultLocale: 'tr',
        locales: ['tr', "en"],
    },
    presets: [
        [
            'classic',
            ({
                docs: {
                },
                blog: {
                    showReadingTime: false,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig: ({
        navbar: {
            title: 'Hackadia Blog',
            logo: {
                alt: 'Hackadia Blog Logo',
                src: 'img/favicon.png',
            },
            items: [
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Makaleler',
                },
                {
                    href: 'https://hackadia.com.tr',
                    label: 'Hackadia',
                    position: 'right',
                },
                {
                    href: 'https://github.com/AhmetinzmSec',
                    label: 'GitHub Reposu',
                    position: 'right',
                },
                {
                    type: "localeDropdown",
                    position: 'right',
                }
            ],
        },
        footer: {
            links: [
                {
                    title: 'Haberler',
                    items: [
                        {
                            label: 'Makaleler',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Projelerimiz',
                    items: [
                        {
                            label: 'Thunar',
                            href: 'https://thunar.hackadia.com.tr',
                        },
                        {
                            label: 'Rıhtım',
                            href: 'https://hackadia.com.tr/download',
                        },
                    ],
                },
                {
                    title: 'Daha Fazla',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                    ],
                },
            ],
            copyright: `Hackadia © 2022 - 2023`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
    themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
};

module.exports = config;