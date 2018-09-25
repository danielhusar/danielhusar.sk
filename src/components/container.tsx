import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => <Container>{children}</Container>;
