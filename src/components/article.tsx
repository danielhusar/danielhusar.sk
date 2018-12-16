import styled from 'styled-components';

export default styled.div`
  /* https://github.com/gatsbyjs/gatsby/issues/9174 */
  .gatsby-resp-image-background-image {
    font-size: 0;
    padding: 0 !important;
    position: static !important;
    display: block;
  }

  .gatsby-resp-image-background-image img {
    position: static !important;
    box-shadow: none !important;
    height: auto !important;
    width: auto !important;
  }

  .gatsby-image-wrapper {
    border-radius: 5px;
  }
`;
