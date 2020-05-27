module.exports = {
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
            feed_url
            image_url
            custom_namespaces {
              media
            }
          }
        }
      }
    `,

    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map(edge => {
            let banner;
            try {
              banner = `${site.siteMetadata.siteUrl}${edge.node.frontmatter.banner.childImageSharp.sizes.src}`.replace(/\/\//, '/');
            } catch (e) {}

            const image = banner ? `<img src="${banner}" /> ` : '';
            return Object.assign(
              {},
              {
                author: 'Daniel Husar',
                title: edge.node.fields.title,
                description: `${image}${edge.node.excerpt}`,
                url: `${site.siteMetadata.siteUrl}${edge.node.fields.url}`.replace(/\/\//, '/'),
                guid: `${site.siteMetadata.siteUrl}${edge.node.fields.url}`.replace(/\/\//, '/'),
                pubDate: edge.node.fields.date,
                language: edge.node.fields.categories[0],
                custom_elements: [
                  banner
                    ? {
                        'media:content': {
                          _attr: {
                            url: banner,
                            medium: 'image',
                          },
                        },
                      }
                    : undefined,
                ],
              }
            );
          });
        },
        query: `
          {
            allMdx(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { draft: { ne: true } } }) {
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
                  frontmatter {
                    banner {
                      childImageSharp {
                        sizes(maxWidth: 700) {
                          src
                        }
                      }
                    }
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
