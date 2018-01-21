import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Title from './Title';

const Anchor = styled(({ href, className, children }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
))`
  margin-right: 15px;
`;

const Header = styled(({ className }) => (
  <div className={className}>
    <Title />
    <nav>
      <Anchor href="/">Home</Anchor>
      <Anchor href="/about">About</Anchor>
    </nav>
  </div>
))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
