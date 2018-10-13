import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Container from './container';
import '../css/typography.css';
import '../css/prism.css';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string | null;
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

export default ({ children, title: customTitle, description: customDescription, image }: Props) => (
  <StaticQuery
    query={query}
    render={data => {
      let { title, description, keywords } = data.site.siteMetadata;
      title = customTitle ? `${customTitle} | ${title}` : title;
      description = customDescription || description;
      return (
        <>
          <Helmet title={title}>
            <html lang="en" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content="Customer Messaging Platform | Intercom" />
            <meta property="og:description" content={description} />
            {image ? <meta property="og:image" content={image} /> : null}
          </Helmet>
          <Container>{children}</Container>
        </>
      );
    }}
  />
);
