import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';
import PrismCode from 'react-prism';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { oc } from 'ts-optchain';
import Spacer from '../components/spacer';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Small from '../components/small';
import { LiveEditWrap, LiveErrorWrap, LivePreviewWrap, LiveLabel } from '../components/live';
import { mdx } from '../types'; // eslint-disable-line

interface Props {
  data: {
    mdx: mdx;
  };
}

interface PreComponentProps {
  children: {
    props: {
      children: string;
      props: {
        className: string;
      };
    };
  };
}

const PreComponent = (props: PreComponentProps) =>
  props.children.props.props && props.children.props.props.className === 'language-.jsx' ? (
    <LiveProvider mountStylesheet={false} code={props.children.props.children}>
      <LiveEditWrap className="language-jsx">
        <LiveLabel>Edit</LiveLabel>
        <LiveEditor tabIndex={-1} />
      </LiveEditWrap>
      <LiveErrorWrap>
        <LiveError />
      </LiveErrorWrap>
      <LivePreviewWrap>
        <LiveLabel onWhiteBg={true}>Preview</LiveLabel>
        <LivePreview />
      </LivePreviewWrap>
    </LiveProvider>
  ) : (
    <PrismCode className={props.children.props.props.className}>{props.children.props.children}</PrismCode>
  );

export default function Post({ data: { mdx: post } }: Props) {
  const banner = oc(post).frontmatter.banner.childImageSharp.sizes();
  return (
    <>
      <Nav active="post" />
      <Layout title={post.fields.title} description={post.excerpt} image={banner ? banner.src : null}>
        <Spacer size={8} />
        <article>
          {banner ? <Img sizes={banner} /> : null}
          <h1>{post.fields.title}</h1>
          <Small>{post.fields.date}</Small>
          <MDXProvider components={{ pre: PreComponent }}>
            <MDXRenderer>{post.code.body}</MDXRenderer>
          </MDXProvider>
        </article>
        <Spacer size={8} />
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      excerpt(pruneLength: 300)
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
