import styled, { css } from 'styled-components';

interface Props {
  size: number;
}

export default styled.div`
  display: block;
  ${(props: Props) =>
    css`
      height: ${props.size * 10}px;
    `};
`;
