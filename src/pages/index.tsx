import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { SocialIcon } from 'react-social-icons';
import { oc } from 'ts-optchain';
import Layout from '../components/layout';
import Spacer from '../components/spacer';
import { ImageSharp } from '../types/graphql';

interface Props {
  data: {
    portrait: {
      childImageSharp?: ImageSharp;
    };
    intercom: {
      childImageSharp?: ImageSharp;
    };
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
  margin: -10px 0 20px;
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
  max-width: 500px;
  padding-left: 30px;

  @media (max-width: 45.99em) {
    padding: 40px 0 0;
  }
`;

const iconStyle = {
  height: 40,
  width: 40,
  marginRight: '10px',
};

const SocialWrapper = styled.span`
  .social-icon {
    opacity: 0.7;
    transition: opacity 0.3s;
  }

  .social-icon:hover {
    opacity: 1;
  }
`;

export default ({ data }: Props) => {
  const portrait = oc(data).portrait.childImageSharp.fluid();
  const intercomLogo = oc(data).intercom.childImageSharp.fixed();
  return (
    <Layout image={portrait ? portrait.src : null}>
      <Headline>Daniel Husar</Headline>
      <Row>
        <Col xs={12} sm={5} md={5} lg={5}>
          {portrait ? (
            <Portrait>
              <Img fluid={portrait} alt="My portrait" fadeIn={false} />
            </Portrait>
          ) : null}
        </Col>
        <Col xs={12} sm={7} md={7} lg={7}>
          <About>
            <SubHeadline>Hi!</SubHeadline>
            My name is Daniel, and I’m a product engineer based in San Francisco.
            <Spacer size={3} />
            Right now I’m working on{' '}
            {intercomLogo ? (
              <IntercomLogo>
                <Img fixed={intercomLogo} alt="Intercom" fadeIn={false} />
              </IntercomLogo>
            ) : null}
            <a href="https://www.intercom.com">Intercom</a> <a href="https://www.intercom.com/messenger">Messenger</a> to make internet business
            personal.
            <Spacer size={3} />
            <Link to="/blog/">Read my blog</Link> or follow me on social media:
            <Spacer size={3} />
            <SocialWrapper>
              <SocialIcon url="http://twitter.com/DanoHusar" style={iconStyle} />
            </SocialWrapper>
            <SocialWrapper>
              <SocialIcon url="https://github.com/danielhusar" style={iconStyle} />
            </SocialWrapper>
            <SocialWrapper>
              <SocialIcon url="https://www.linkedin.com/in/daniel-husar-60783958/" style={iconStyle} />
            </SocialWrapper>
            <SocialWrapper>
              <SocialIcon url="https://www.instagram.com/efrafa/" style={iconStyle} />
            </SocialWrapper>
            <SocialWrapper>
              <SocialIcon url="mailto:dano.husar@gmail.com" style={iconStyle} />
            </SocialWrapper>
            <SocialWrapper>
              <SocialIcon url="/rss.xml" style={iconStyle} network="rss" />
            </SocialWrapper>
          </About>
        </Col>
      </Row>
      <Spacer size={7} />
    </Layout>
  );
};

export const query = graphql`
  query {
    portrait: file(relativePath: { eq: "images/portrait.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    intercom: file(relativePath: { eq: "images/intercom.png" }) {
      childImageSharp {
        fixed(width: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
