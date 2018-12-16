import React from 'react';
import styled from 'styled-components';
import Small from '../components/small';

const Bullet = styled.span`
  padding: 0 5px;
`;

interface Props {
  date: Date | String;
  timeToRead: number;
}

export default ({ date, timeToRead }: Props) => (
  <Small>
    {date} <Bullet>•</Bullet> {timeToRead} minute
    {timeToRead > 1 ? 's' : ''} read
  </Small>
);
