import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Container from './container';
import '../css/typography.css';

interface Props {
  children: ReactNode;
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

export default ({ children }: Props) => (
  <StaticQuery
    query={query}
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
