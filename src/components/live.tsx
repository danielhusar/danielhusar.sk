import styled, { css } from 'styled-components';

export const LiveEditWrap = styled.code`
  margin-bottom: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  position: relative;

  pre:focus {
    outline-offset: 12px;
  }
`;

interface LiveLabelProps {
  onWhiteBg?: boolean;
}

export const LiveLabel = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 10px;
  text-transform: uppercase;
  padding: 2px 3px 1px;
  background: white;
  color: #a04141;
  border: 1px solid #2d2d2d;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  ${({ onWhiteBg }: LiveLabelProps = { onWhiteBg: false }) =>
    onWhiteBg &&
    css`
      right: -1px;
    `};
`;

export const LiveErrorWrap = styled.div`
  .react-live-error {
    margin: 0;
    padding: 1em;
    color: white;
    background: #a04141;
    font-size: 14px;
  }
`;

export const LivePreviewWrap = styled.div`
  border: 1px solid #2d2d2d;
  border-top: 0;
  padding: 1em;
  margin-bottom: 0.5em;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-size: 15px;
  position: relative;
`;
