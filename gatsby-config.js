const rssPlugin = require('./plugins/rss');
const filesystemPlugin = require('./plugins/filesystem');
const faviconPlugin = require('./plugins/favicon');
const googleAnalyticsPlugin = require('./plugins/google-analytics');
const mdxPlugin = require('./plugins/mdx');

module.exports = {
  siteMetadata: {
    title: 'Daniel Husar',
    description: 'Product engineer based in San Francisco',
    keywords: 'blog,javascript,react',
    siteUrl: 'https://www.danielhusar.sk',
    blogUrl: 'https://www.danielhusar.sk/blog',

    feed_url: 'https://www.danielhusar.sk/rss.xml',
    image_url: 'https://www.danielhusar.sk/portrait.png',
    custom_namespaces: {
      media: 'http://search.yahoo.com/mrss/',
    },

    pathPrefix: '/',
  },
  plugins: [
    filesystemPlugin,
    faviconPlugin,
    googleAnalyticsPlugin,
    mdxPlugin,
    rssPlugin,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    // 'gatsby-plugin-offline',
  ],
};
