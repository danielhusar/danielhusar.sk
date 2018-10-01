import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

interface Props {
  active: 'home' | 'english' | 'slovak';
}

const Nav = styled.div`
  display: block;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const NavItem = styled.span`
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

export default ({ active }: Props) => (
  <Nav>
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
);
