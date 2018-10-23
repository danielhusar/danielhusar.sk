module.exports = {
  resolve: 'gatsby-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 920,
          sizeByPixelDensity: false,
          linkImagesToOriginal: true,
        },
      },
    ],
  },
};
