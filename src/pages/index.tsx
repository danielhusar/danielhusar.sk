import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import { SocialIcon } from 'react-social-icons';
import Layout from '../components/layout';
import { File } from '../types/graphql';

interface Props {
  data: {
    portrait: File;
    intercom: File;
  };
}

const Headline = styled.h1`
  font-size: 40px;
  padding-top: 50px;
  margin: 0 0 30px;

  @media (max-width: 600px) {
    font-size: 30px;
    padding-top: 30px;
  }
`;

const SubHeadline = styled.h2`
  font-size: 22px;
  margin: -5px 0 20px;
`;

const Portrait = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

const IntercomLogo = styled.div`
  display: inline-block;
  position: relative;
  top: 1px;
  padding-right: 5px;
`;

const About = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  max-width: 500px;
`;

const iconStyle = {
  height: 40,
  width: 40,
  marginRight: '10px',
};

export default ({ data }: Props) => (
  <Layout>
    <Headline>Daniel Husar</Headline>
    <Flex wrap={true}>
      <Box w={[1, 1 / 3]}>
        {data.portrait.childImageSharp && data.portrait.childImageSharp.fluid ? (
          <Portrait>
            <Img fluid={data.portrait.childImageSharp.fluid} alt="My portrait" fadeIn={false} />
          </Portrait>
        ) : null}
      </Box>
      <Box w={[1, 2 / 3]} pl={[0, 4]} pt={[3, 0]}>
        <About>
          <SubHeadline>Hi!</SubHeadline>
          My name is Daniel and I’m product engineer based in San Francisco.
          <br />
          <br />
          Right now I’m working on{' '}
          {data.intercom.childImageSharp && data.intercom.childImageSharp.fixed ? (
            <IntercomLogo>
              <Img fixed={data.intercom.childImageSharp.fixed} alt="Intercom" fadeIn={false} />
            </IntercomLogo>
          ) : null}
          <a href="https://www.intercom.com">Intercom</a> <a href="https://www.intercom.com/messenger">Messenger</a> to make internet business
          personal.
          <br />
          <br />
          You learn more about me here:
        </About>
        <SocialIcon url="http://twitter.com/DanoHusar" style={iconStyle} />
        <SocialIcon url="https://github.com/danielhusar" style={iconStyle} />
        <SocialIcon url="https://www.linkedin.com/in/daniel-husar-60783958/" style={iconStyle} />
        <SocialIcon url="https://www.instagram.com/efrafa/" style={iconStyle} />
        <SocialIcon url="mailto:dano.husar@gmail.com" style={iconStyle} />
      </Box>
    </Flex>
  </Layout>
);

export const query = graphql`
  query {
    portrait: file(relativePath: { eq: "portrait.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    intercom: file(relativePath: { eq: "intercom.png" }) {
      childImageSharp {
        fixed(width: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
