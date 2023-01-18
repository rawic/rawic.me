const { languages, defaultLanguage } = require('./languages');
const path = require('path');

module.exports = {
    siteMetadata: {
        title: `RAWIC - Rafał Wichowski | Front-End Developer`,
        description: `Programista Front-End nieustannie poszukujący nowych wyzwań. Ponad 5-letnie doświadczenie w tworzeniu aplikacji internetowych.`,
        author: `RAWIC - Rafał Wichowski`,
        image: `src/images/icon.png`,
        siteUrl: `https://rawic.me`,
        url: `https://rawic.me`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@src': path.resolve(__dirname, 'src'),
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@layouts': 'src/layouts',
                    '@features': 'src/features',
                    '@pages': 'src/pages',
                },
                extensions: ['tsx', 'ts', 'sass'],
            },
        },
        `gatsby-plugin-sitemap`,
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
                icon: `./src/images/icon.png`, // This path is relative to the root of the site.
                cache_busting_mode: 'none',
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`,
                languages,
                defaultLanguage,
                siteUrl: `http://localhost:8000/`,
                i18nextOptions: {
                    fallbackLng: defaultLanguage,
                    supportedLngs: languages,
                    interpolation: {
                        escapeValue: false,
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
        `gatsby-plugin-offline`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
