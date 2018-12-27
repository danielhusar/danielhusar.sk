import styled, { css } from 'styled-components';

interface Props {
  maxWidth?: number;
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;

  ${(props: Props) =>
    css`
      max-width: ${props.maxWidth}px };
    `};

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

Container.defaultProps = {
  maxWidth: 1000,
};

export default Container;
