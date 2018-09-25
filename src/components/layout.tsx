import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Container from './container';
import '../css/typography.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      const { title, description, keywords } = data.site.siteMetadata;
      return (
        <>
          <Helmet title={title}>
            <html lang="en" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
          </Helmet>
          <Container>{children}</Container>
        </>
      );
    }}
  />
);

export default Layout;
