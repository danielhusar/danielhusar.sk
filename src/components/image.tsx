import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  width: number;
  children: ReactNode;
}

const Wrapper = styled.div`
  margin: 1.4em auto;
  text-align: center;

  span {
    display: inline-block;

    ${(props: Props) =>
      css`
      max-width: ${props.width}px };
    `};
  }

  p {
    margin: 0 !important;
  }
`;

export default ({ width, children }: Props) => (
  <Wrapper width={width}>
    <span>{children}</span>
  </Wrapper>
);
