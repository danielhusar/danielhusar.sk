import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

interface Props {
  nextPagePath?: string;
  previousPagePath?: string;
}

const Pagination = styled.div`
  display: block;
  margin: 0 0 50px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
`;

const PaginationItem = styled.span`
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  ${({ position }: { position: string }) =>
    position === 'right' &&
    css`
      float: right;
    `};
`;

export default ({ nextPagePath, previousPagePath }: Props) =>
  nextPagePath || previousPagePath ? (
    <Pagination>
      <PaginationItem position="right">{nextPagePath && <Link to={nextPagePath}>Next Page</Link>}</PaginationItem>
      <PaginationItem position="left">{previousPagePath && <Link to={previousPagePath}>Previous Page</Link>}</PaginationItem>
    </Pagination>
  ) : null;
