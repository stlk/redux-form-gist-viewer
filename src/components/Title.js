import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 5px;
  margin-bottom: 48px;
  margin-top: 0;
  text-transform: uppercase;

  a {
    color: var(--main-color);
    text-decoration: none;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

export default () =>
  <Title>
      <a href='/'>
        <strong>gist</strong><br />
        viewer
      </a>
  </Title>;
