import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Title from './Title';

const Anchor = styled(({ href, className, children }) =>
  <a href={href} className={className}>{children}</a>
)`
  margin-right: 15px;
`;

const Header = styled(({ className }) =>
  <div className={className}>
    <Title />
    <nav>
      <Anchor href="/">Home</Anchor>
      <Anchor href="/about">About</Anchor>
    </nav>
  </div>
)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
