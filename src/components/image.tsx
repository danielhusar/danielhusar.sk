import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  width: number;
  children: ReactNode;
  caption: string | null;
}

interface WrapperProps {
  width: number;
  children: ReactNode;
}

const Wrapper = styled.div`
  margin: ${props =>
    css`
      ${props.theme.margin} auto
    `};
  text-align: center;

  span {
    display: inline-block;

    ${(props: WrapperProps) =>
      css`
      max-width: ${props.width}px };
    `};
  }

  p {
    margin: 0 !important;
  }
`;

const Caption = styled.div`
  margin-top: 10px;
  color: #857272;
  font-size: 12px;
`;

export default ({ width, children, caption }: Props) => (
  <Wrapper width={width}>
    <span>{children}</span>
    {caption ? <Caption>{caption}</Caption> : null}
  </Wrapper>
);
