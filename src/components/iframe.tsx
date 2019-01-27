import React from 'react';
import styled, { css } from 'styled-components';
import Overlay from './overlay';

interface Props {
  width: number;
  height: number;
  src: string;
}

interface WrapperProps {
  width: number;
  height: number;
}

const Wrapper = styled.div`
  margin: ${props =>
    css`
      ${props.theme.margin} 0
    `};
  text-align: center;

  .iframe-outer {
    display: inline-block;
    max-width: 100%;

    ${(props: WrapperProps) =>
      css`
        width: ${props.width}px;
      `};
  }

  .iframe-inner {
    display: inline-block;
    position: relative;
    height: 0;
    width: 100%;

    ${(props: WrapperProps) =>
      css`
        padding-top: ${(props.height / props.width) * 100}%;
      `};
  }

  .disclaimer,
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
  }
`;

export default ({ width, height, src }: Props) => (
  <Wrapper width={width} height={height}>
    <div className="iframe-outer">
      <div className="iframe-inner">
        <Overlay>
          <iframe src={src} />
        </Overlay>
      </div>
    </div>
  </Wrapper>
);
