import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Spacer from '../components/spacer';
import Layout from '../components/layout';
import Nav from '../components/nav';
import { mdx } from '../types';

interface Props {
  data: {
    mdx: mdx;
  };
}

export default function Post({ data: { mdx } }: Props) {
  const banner =
    mdx.frontmatter.banner && mdx.frontmatter.banner.childImageSharp && mdx.frontmatter.banner.childImageSharp.sizes
      ? mdx.frontmatter.banner.childImageSharp.sizes
      : null;
  return (
    <>
      <Nav active="post" />
      <Layout title={mdx.frontmatter.title} image={banner ? banner.src : null}>
        <h1>{mdx.frontmatter.title}</h1>
        <h2>{mdx.frontmatter.date}</h2>
        {banner ? <Img sizes={banner} /> : null}
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
        <Spacer size={8} />
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
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
      code {
        body
      }
    }
  }
`;
