import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Pagination from '../components/pagination';
import Spacer from '../components/spacer';
import Small from '../components/small';
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
  const latestPost = posts[0];
  const ogImage = oc(latestPost).node.frontmatter.banner.childImageSharp.sizes();

  return (
    <>
      <Nav active={activeCategory ? activeCategory : 'home'} />
      <Layout title="Blog" image={ogImage ? ogImage.src : null}>
        <Spacer size={8} />
        {posts.map((edge: edge | undefined) => {
          if (!edge) return;
          const { node: post } = edge;
          const banner = oc(post).frontmatter.banner.childImageSharp.sizes();
          return (
            <article key={post.id}>
              {banner ? (
                <Link to={post.fields.url}>
                  <Img sizes={banner} />
                </Link>
              ) : null}
              <h2>
                <Link to={post.fields.url}>{post.fields.title}</Link>
              </h2>
              <Small>{post.fields.date}</Small>
              <p>{post.excerpt}</p>
              <Link to={post.fields.url}>
                <Small>Continue Reading</Small>
              </Link>
              <Spacer size={8} />
            </article>
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
