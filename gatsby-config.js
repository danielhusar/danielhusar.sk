const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Daniel Husar',
    description: 'Daniel Husar personal website',
    keywords: 'blog,javascript,react',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Daniel Husar',
        short_name: 'Daniel Husar',
        start_url: '/',
        background_color: '#209cee',
        theme_color: '#209cee',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
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
