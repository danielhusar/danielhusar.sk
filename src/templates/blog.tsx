import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Pagination from '../components/pagination';
import Spacer from '../components/spacer';
import { allMdx, categories, edge } from '../types';

interface Props {
  data: {
    allMdx: allMdx;
  };
  pageContext: {
    pagination: {
      page: number[];
      nextPagePath: string;
      previousPagePath: string;
    };
    activeCategory: categories;
  };
}

export default ({ data: { allMdx }, pageContext: { pagination, activeCategory } }: Props) => {
  const { page, nextPagePath, previousPagePath } = pagination;
  const posts: (edge | undefined)[] = page.map(id => allMdx.edges.find(edge => edge.node.id === id));

  return (
    <>
      <Nav active={activeCategory ? activeCategory : 'home'} />
      <Layout title="Blog">
        <Spacer size={8} />
        {posts.map((edge: edge | undefined) => {
          if (!edge) return;
          const { node: post } = edge;
          return (
            <div key={post.id}>
              {post.frontmatter.banner && post.frontmatter.banner.childImageSharp && post.frontmatter.banner.childImageSharp.sizes ? (
                <Link to={post.fields.url}>
                  <Img sizes={post.frontmatter.banner.childImageSharp.sizes} />
                </Link>
              ) : null}
              <h2>
                <Link to={post.fields.url}>{post.fields.title}</Link>
              </h2>
              <small>{post.fields.date}</small>
              <p>{post.excerpt}</p>
              <Link to={post.fields.url}>Continue Reading</Link>
              <Spacer size={8} />
            </div>
          );
        })}
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
            title
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
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
