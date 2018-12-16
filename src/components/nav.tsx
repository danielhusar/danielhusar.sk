import React, { ReactNode } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { categories } from '../types';
import { File } from '../types/graphql';

interface Props {
  active: categories;
}

interface Data {
  portrait: File;
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
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
  height: 50px;
`;

const query = graphql`
  query {
    portrait: file(relativePath: { eq: "images/portrait.jpeg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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
          <Link to="/blog">Index</Link>
        </NavItem>
        <NavItem active={active === 'en'}>
          <Link to="/">About me</Link>
        </NavItem>
        {/*
        <NavItem active={active === 'en'}>
          <Link to="/blog/categories/en">English posts</Link>
        </NavItem>
        <NavItem active={active === 'sk'}>
          <Link to="/blog/categories/sk">Slovak posts</Link>
        </NavItem>
        */}
      </Nav>
    )}
  />
);
