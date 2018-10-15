module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            rssUrl
            portrait
            site_url: siteUrl
            feed_url: rssUrl
            image_url: portrait
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map(edge => {
            return Object.assign(
              {},
              {
                author: 'Daniel Husar',
                title: edge.node.fields.title,
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.fields.url,
                guid: site.siteMetadata.siteUrl + edge.node.fields.url,
                pubDate: edge.node.fields.date,
                language: edge.node.fields.categories[0],
              }
            );
          });
        },
        query: `
          {
            allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 250)
                  fields {
                    title
                    url
                    date(formatString: "YYYY-MM-DDTHH:MM:SS")
                    categories
                  }
                }
              }
            }
          }
        `,
        output: '/rss.xml',
        title: 'Daniel Husar Blog',
      },
    ],
  },
};
