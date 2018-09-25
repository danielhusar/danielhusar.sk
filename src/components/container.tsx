import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1000px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => <Container>{children}</Container>;
