import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Pagination from '../components/pagination';
import Spacer from '../components/spacer';

export default ({ data: { allMdx }, pageContext: { pagination, activeCategory } }) => {
  const { page, nextPagePath, previousPagePath } = pagination;
  const posts = page.map(id => allMdx.edges.find(edge => edge.node.id === id));

  return (
    <>
      <Nav active={activeCategory ? activeCategory : 'home'} />
      <Layout>
        <Spacer size={5} />
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            {post.frontmatter.banner && (
              <Link to={post.fields.url}>
                <Img sizes={post.frontmatter.banner.childImageSharp.sizes} />
              </Link>
            )}
            <h2>
              <Link to={post.fields.url}>{post.frontmatter.title}</Link>
            </h2>
            <small>{post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
            <Link to={post.fields.url}>Continue Reading</Link>
            <Spacer size={8} />
          </div>
        ))}
        <Pagination nextPagePath={nextPagePath} previousPagePath={previousPagePath} />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            url
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                sizes(maxWidth: 920) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
