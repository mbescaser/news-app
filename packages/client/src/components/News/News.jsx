import React from 'react';
import styled from 'styled-components';

import NewsProvider from '../../contexts/news/NewsProvider';
import NewsSourcesList from './NewsSourcesList';
import NewsList from './NewsList';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const News = () => {
  return (
    <Container>
      <NewsProvider>
        <NewsSourcesList />
        <NewsList />
      </NewsProvider>
    </Container>
  );
};

export default News;
