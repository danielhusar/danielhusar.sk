const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Daniel Husar',
    description: 'Daniel Husar personal website',
    keywords: 'blog,javascript,react',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/icon.png',
        appName: 'Daniel Husar',
        appDescription: 'Daniel Husar',
        developerName: 'Daniel Husar',
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        theme_color: '#209cee',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-50596448-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        cookieDomain: 'danielhusar.sk',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
};
