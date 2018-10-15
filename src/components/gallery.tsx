import styled from 'styled-components';

export default styled.div`
  margin: -0.7em 0;

  p {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.7em !important;
  }

  p > .gatsby-resp-image-link,
  p > .gatsby-resp-image-wrapper {
    flex-basis: calc(33.333%);
    width: calc(33.333%);
    max-width: calc(33.333%) !important;
    margin: 0.7em 0;
    padding: 0 0.7em;
  }

  @media (max-width: 700px) {
    p > .gatsby-resp-image-link,
    p > .gatsby-resp-image-wrapper {
      flex-basis: calc(50%);
      width: calc(50%);
      max-width: calc(50%) !important;
    }
  }

  @media (max-width: 410px) {
    p > .gatsby-resp-image-link,
    p > .gatsby-resp-image-wrapper {
      flex-basis: calc(100%);
      width: calc(100%);
      max-width: calc(100%) !important;
    }
  }
`;
