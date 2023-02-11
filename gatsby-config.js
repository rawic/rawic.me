const { languages, defaultLanguage } = require('./languages');
const path = require('path');
const siteUrl = process.env.URL || `https://rawic.me`;

module.exports = {
    siteMetadata: {
        title: `RAWIC - Rafał Wichowski | Front-End Developer`,
        description: `Programista Front-End nieustannie poszukujący nowych wyzwań. Ponad 5-letnie doświadczenie w tworzeniu aplikacji internetowych.`,
        author: `RAWIC - Rafał Wichowski`,
        image: `src/images/icon.png`,
        siteUrl,
        url: `https://rawic.me/`,
    },
    plugins: [
        'gatsby-plugin-fontawesome-css',
        // 'gatsby-plugin-layout',
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@src': path.resolve(__dirname, 'src'),
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@layouts': 'src/layouts',
                    '@features': 'src/features',
                    '@pages': 'src/pages',
                    '@hooks': 'src/hooks',
                    '@routes': 'src/routes',
                    '@utils': 'src/utils',
                    '@types': 'src/types',
                },
                extensions: ['tsx', 'ts', 'sass'],
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                excludes: ['/**/404', '/**/404.html'],
                query: `
                    {
                        site {
                        siteMetadata {
                            siteUrl
                        }
                        }
                        allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
                        nodes {
                            context {
                            i18n {
                                defaultLanguage
                                languages
                                originalPath
                            }
                            }
                            path
                        }
                        }
                    }
                `,
                serialize: (node) => {
                    const { languages, originalPath, defaultLanguage } = node.context.i18n;
                    const url = siteUrl + originalPath;
                    const links = [
                        { lang: defaultLanguage, url },
                        { lang: 'x-default', url },
                    ];
                    languages.forEach((lang) => {
                        if (lang === defaultLanguage) return;
                        links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
                    });
                    return {
                        url,
                        changefreq: 'daily',
                        priority: originalPath === '/' ? 1.0 : 0.7,
                        links,
                    };
                },
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `locale`,
                path: `${__dirname}/locales`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaultQuality: 100,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `RAWIC - Rafał Wichowski`,
                short_name: `RAWIC`,
                start_url: `/`,
                background_color: `#111111`,
                theme_color: `#111111`,
                display: `fullscreen`,
                icon: `./src/images/icon.png`,
                cache_busting_mode: 'none',
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`,
                languages,
                defaultLanguage,
                siteUrl: `https://rawic.me/`,
                trailingSlash: 'always',
                redirect: false,
                i18nextOptions: {
                    fallbackLng: defaultLanguage,
                    supportedLngs: languages,
                    interpolation: {
                        escapeValue: false,
                    },
                    detection: {
                        order: ['querystring'],
                    },
                },
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://rawic.me/',
                sitemap: 'https://rawic.me/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
};
