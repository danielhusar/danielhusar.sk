module.exports = {
  resolve: 'gatsby-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-smartypants',
      },
      {
        resolve: 'gatsby-remark-copy-linked-files',
      },
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 700,
          sizeByPixelDensity: false,
          linkImagesToOriginal: true,
        },
      },
      {
        resolve: 'gatsby-remark-autolink-headers',
        options: {
          className: 'header-anchor-link',
          maintainCase: false,
        },
      },
    ],
  },
};
