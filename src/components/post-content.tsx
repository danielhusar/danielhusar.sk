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
`;
