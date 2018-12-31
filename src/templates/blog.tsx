import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { oc } from 'ts-optchain';
import styled from 'styled-components';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Pagination from '../components/pagination';
import Spacer from '../components/spacer';
import Small from '../components/small';
import MetaData from '../components/metadata';
import Article from '../components/article';
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

const H2 = styled.h2`
  margin: 0;
`;

export default ({ data: { allMdx }, pageContext: { pagination, activeCategory } }: Props) => {
  const { page, nextPagePath, previousPagePath } = pagination;
  const posts: (edge | undefined)[] = page.map(id => allMdx.edges.find(edge => edge.node.id === id));
  const latestPost = posts[0];

  return (
    <>
      <Layout title="Blog" maxWidth={780}>
        <Nav active={activeCategory ? activeCategory : 'home'} />
        <Spacer size={4} />
        {posts.map((edge: edge | undefined) => {
          if (!edge) return;
          const { node: post } = edge;
          return (
            <Article key={post.id}>
              <H2>
                <Link to={post.fields.url}>{post.fields.title}</Link>
              </H2>
              <Spacer size={1} />
              <MetaData date={post.fields.date} timeToRead={post.timeToRead} />
              <Spacer size={1} />
              <div>{post.excerpt}</div>
              <Spacer size={1} />
              <Link to={post.fields.url}>
                <Small>Continue Reading</Small>
              </Link>
              <Spacer size={4} />
            </Article>
          );
        })}
        <Pagination nextPagePath={nextPagePath} previousPagePath={previousPagePath} />
        <Spacer size={4} />
        <Footer active={activeCategory ? activeCategory : 'home'} />
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
          timeToRead
          fields {
            url
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
