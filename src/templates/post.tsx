import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { oc } from 'ts-optchain';
import Spacer from '../components/spacer';
import Layout from '../components/layout';
import Nav from '../components/nav';
import { mdx } from '../types'; // eslint-disable-line

interface Props {
  data: {
    mdx: mdx;
  };
}

export default function Post({ data: { mdx } }: Props) {
  const banner = oc(mdx).frontmatter.banner.childImageSharp.sizes();
  return (
    <>
      <Nav active="post" />
      <Layout title={mdx.fields.title} image={banner ? banner.src : null}>
        <h1>{mdx.fields.title}</h1>
        <h2>{mdx.fields.date}</h2>
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
      fields {
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
      code {
        body
      }
    }
  }
`;
