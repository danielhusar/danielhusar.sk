module.exports = {
  resolve: 'gatsby-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-images',
        pluginOptions: {
          maxWidth: 920,
          sizeByPixelDensity: false,
          linkImagesToOriginal: true,
        },
      },
    ],
  },
};
