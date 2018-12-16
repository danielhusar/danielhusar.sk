import styled from 'styled-components';

export default styled.div`
  p,
  ul,
  ol {
    margin: 1.4em 0;
  }

  h2,
  h3 {
    margin-top: 1.4em;
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
`;
