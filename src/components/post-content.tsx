import styled, { css } from 'styled-components';

export default styled.div`
  p,
  blockquote,
  ul,
  ol,
  code[class*='language-'] {
    margin: ${props =>
      css`
        ${props.theme.margin} 0
      `};
  }

  h2,
  h3,
  h4 {
    margin-top: ${props =>
      css`
        ${props.theme.margin}
      `};

    + p,
    + blockquote,
    + ul,
    + ol,
    + code[class*='language-'] {
      margin-top: 1em;
    }
  }

  h1 {
    font-size: 2em;
  }

  > div > :first-child {
    margin-top: 0;
  }

  p a {
    text-decoration: underline;
  }

  p a:hover {
    text-decoration: none;
  }

  li + li {
    margin-top: 0.8em;
  }

  blockquote {
    border-left: 5px solid #d4d4d4;
    margin-left: 0;
    padding-left: 20px;
    color: #857272;
    font-style: italic;
    font-size: 14px;

    p {
      margin: 0;
    }
  }

  .header-anchor-link {
    position: absolute;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s;
    font-size: 1.2em;
    margin-top: -0.15em;

    &:after {
      content: '#';
      font-weight: 100;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    padding-left: 20px;
    margin-left: -20px;

    &:hover .header-anchor-link {
      opacity: 1;
    }
  }

  p + ul,
  p + ol {
    margin-top: -1em;
  }
`;
