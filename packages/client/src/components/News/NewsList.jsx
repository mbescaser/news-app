import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import NewsDetail from './NewsDetail';
import NewsListPagination from './NewsListPagination';
import useNewsContext from '../../contexts/news/useNewsContext';

const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  grid-template-rows: repeat(2, minmax(200px, 1fr));
  grid-gap: 24px;
`;

const NewsList = () => {
  const {
    state: {
      // sources: { isFetchingSourcesFulfilled, data: sourcesData },
      source: {
        sourceId,
        isFetchingSource,
        isFetchingSourceFulfilled,
        isFetchingSourceRejected,
        data,
        error,
      },
    },
  } = useNewsContext();

  return (
    <Container>
      {!!sourceId && (
        (!isFetchingSource && (
          ((isFetchingSourceRejected && (
            <div>{error}</div>
          )) || (isFetchingSourceFulfilled && (
            <>
              <Content>
                {data.map((newsDetail) => (
                  <NewsDetail key={newsDetail.id} {...newsDetail} />
                ))}
              </Content>
              <NewsListPagination />
            </>
          )))
        )) || (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
          />
        )
      )}
    </Container>
  );
};

export default NewsList;
