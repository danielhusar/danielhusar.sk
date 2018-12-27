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

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 30px;
  border-top: 1px solid #ccc;
`;

const FooterItem = styled.div`
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
  <Footer>
    <FooterItem active={active === 'home'}>
      <Link to="/blog/">Blog Index</Link>
    </FooterItem>
    <FooterItem active={active === 'en'}>
      <Link to="/">About me</Link>
    </FooterItem>
  </Footer>
);
