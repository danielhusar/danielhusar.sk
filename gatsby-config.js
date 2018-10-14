const rssPlugin = require('./plugins/rss');

module.exports = {
  siteMetadata: {
    title: 'Daniel Husar',
    description: 'Product engineer based in San Francisco',
    keywords: 'blog,javascript,react',
    siteUrl: 'https://www.danielhusar.sk',
    blogUrl: 'https://www.danielhusar.sk/blog',
    rssUrl: 'https://www.danielhusar.sk/rss.xml',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-50596448-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        cookieDomain: 'danielhusar.sk',
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    rssPlugin,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
  ],
};
