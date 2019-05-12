module.exports = {
  siteMetadata: {
    title: `RAWIC`,
    description: `Programista Front-End nieustannie poszukujący nowych wyzwań. Ponad 5-letnie doświadczenie w tworzeniu aplikacji internetowych.`,
    author: `RAWIC - Rafał Wichowski`,
    image: `src/images/icon.png`,
    url: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
