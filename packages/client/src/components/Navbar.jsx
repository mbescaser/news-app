import React from 'react';
import styled from 'styled-components';

import { ReactComponent as NewsLogo } from '../icons/news-logo.svg';

const Container = styled.div`
  height: 48px;
  width: 100%;
  background-color: #eee;
  box-shadow: 0 1.5px 3px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const AppLogo = styled(NewsLogo)`
  height: 80%;
`;

const NavBar = () => (
  <Container>
    <AppLogo />
  </Container>
);

export default NavBar;
