import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import News from './components/News';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const PageContainer = styled.div`
  padding: 24px;
  height: 100%;
`;

const App = () => (
  <Container>
    <Navbar />
    <PageContainer>
      <News />
    </PageContainer>
  </Container>
);

export default App;
