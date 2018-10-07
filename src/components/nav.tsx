import React, { ReactNode } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { File } from '../types/graphql';

interface Props {
  active: 'home' | 'english' | 'slovak';
}

interface Data {
  portrait: File;
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const NavItem = styled.div`
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  ${({ active }: { active: boolean }) =>
    active &&
    css`
      text-decoration: underline;
    `};
`;

const NavPortrait = styled.div`
  overflow: hidden;
  border-radius: 5px;
  height: 30px;
`;

const query = graphql`
  query {
    portrait: file(relativePath: { eq: "images/portrait.jpeg" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default ({ active }: Props) => (
  <StaticQuery
    query={query}
    render={(data: Data) => (
      <Nav>
        <NavItem active={false}>
          <Link to="/" aria-label="About me">
            {data.portrait.childImageSharp && data.portrait.childImageSharp.fixed ? (
              <NavPortrait>
                <Img fixed={data.portrait.childImageSharp.fixed} alt="My portrait" fadeIn={false} />
              </NavPortrait>
            ) : null}
          </Link>
        </NavItem>
        <NavItem active={active === 'home'}>
          <Link to="/blog">Home</Link>
        </NavItem>
        <NavItem active={active === 'english'}>
          <Link to="/blog/categories/english">English posts</Link>
        </NavItem>
        <NavItem active={active === 'slovak'}>
          <Link to="/blog/categories/slovak">Slovak posts</Link>
        </NavItem>
      </Nav>
    )}
  />
);
