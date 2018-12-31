import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';
import PrismCode from 'react-prism';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { oc } from 'ts-optchain';
import Spacer from '../components/spacer';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import MetaData from '../components/metadata';
import Article from '../components/article';
import PostContent from '../components/post-content';
import { LiveEditWrap, LiveErrorWrap, LivePreviewWrap, LiveLabel } from '../components/live';
import { mdx } from '../types'; // eslint-disable-line
import '../lib/prism-extend';

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

const H1 = styled.h1`
  margin: 0;
  font-size: 2em;
`;

const FileName = styled.div`
  font-size: 12px;
  margin-top: 2em;
  padding: 0.2em 0.8em 0.3em;
  border: 1px solid #2d2d2d;
  border-radius: 3px;
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const PreComponent = (props: PreComponentProps) => {
  const [language, filename] = (props.children.props.props ? props.children.props.props.className : '').split('!');
  return language === 'language-.jsx' ? (
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
    <>
      {filename ? <FileName className="filename">{filename}</FileName> : null}
      <PrismCode className={language}>{props.children.props.children}</PrismCode>
    </>
  );
};

export default function Post({ data: { mdx: post } }: Props) {
  const banner = oc(post).frontmatter.banner.childImageSharp.sizes();

  return (
    <>
      <Layout title={post.fields.title} description={post.excerpt} image={banner ? banner.src : null} maxWidth={780}>
        <Nav active="post" />
        <Spacer size={4} />
        <Article>
          {banner ? (
            <>
              <Img sizes={banner} />
              <Spacer size={3} />
            </>
          ) : null}
          <H1>{post.fields.title}</H1>
          <MetaData date={post.fields.date} timeToRead={post.timeToRead} />
          <Spacer size={3} />
          <PostContent>
            <MDXProvider components={{ pre: PreComponent }}>
              <MDXRenderer>{post.code.body}</MDXRenderer>
            </MDXProvider>
          </PostContent>
        </Article>
        <Spacer size={4} />
        <Footer active="post" />
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
      timeToRead
      frontmatter {
        banner {
          childImageSharp {
            sizes(maxWidth: 700) {
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
