import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import { File } from '../types/graphql';

interface Props {
  data: {
    file: File;
  };
}

const Headline = styled.h1`
  font-size: 40px;
  margin: 50px 0 80px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export default ({ data }: Props) => (
  <Layout>
    <Headline>Daniel Husar</Headline>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.file.childImageSharp && data.file.childImageSharp.fixed ? (
      <Img fixed={data.file.childImageSharp.fixed} alt="My portrait" fadeIn={false} />
    ) : null}
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "portrait.jpeg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
