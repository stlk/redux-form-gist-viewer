import { injectGlobal } from 'styled-components';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


injectGlobal`
  :root {
    --main-color: #516163;
    --secondary-color: #63B2BB;
  }

  body {
    color: var(--main-color);
    font-family: 'PT Sans';
    font-size: 22px;
    font-weight: 300;
    line-height: 36px;
  }

  h1 {
    color: #323B3C;
    font-family: 'PT Sans Narrow';
    font-weight: 400;
  }

  p {
    margin-bottom: 36px;
  }

  a {
    color: var(--secondary-color);
  }

  a:hover {
    color: #323B3C;
  }
`;

const Layout = ({ className, children }) =>
  <div className={className}>
    <link
      href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,900"
      rel="stylesheet"
      type="text/css"
    />
    <Header />
    <Content>
      {children}
    </Content>
  </div>;

export default styled(Layout)`
  margin: 20px;
`;
