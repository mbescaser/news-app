import React from 'react';
import styled from 'styled-components';

import useNewsContext from '../../contexts/news/useNewsContext';

const Container = styled.div`
  box-sizing: border-box;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Arrow = styled.span`
  font-size: 14px;
  user-select: none;
  ${({ isNotAllowed }) => ((isNotAllowed && `
    cursor: not-allowed;
    color: rgba(0,0,0,0.4);
  `) || `
    cursor: pointer;
    color: #000;
  `)}
`;

const Arrows = styled.div`
  display: inline-block;
  margin-left: 16px;

  ${Arrow} + ${Arrow} {
    margin-left: 10px;
  }
`;

const PaginationDetails = styled.span``;

const NewsListPagination = () => {
  const {
    state: {
      source: {
        sourceId,
        page,
        perPage,
        totalResults,
      },
    },
    action: {
      handleGetSource,
    },
  } = useNewsContext();

  const currentStartPage = page > 1 ? (page * perPage) + 1 : page;
  const pageCount = Math.ceil(totalResults / perPage);
  const currentEndPage = (() => {
    if (page === 1) {
      return perPage;
    }

    if (page === pageCount) {
      return totalResults;
    }

    return (page + 1) * perPage;
  })();

  const onPageChange = (moveSequence) => () => {
    handleGetSource({ sourceId, page: page + moveSequence });
  };

  return (
    <Container>
      <PaginationDetails>
        {`${currentStartPage} - ${currentEndPage} of ${totalResults}`}
      </PaginationDetails>
      <Arrows>
        <Arrow
          isNotAllowed={page === 1}
          onClick={onPageChange(-1)}
        >
          &lt;
        </Arrow>
        <Arrow
          isNotAllowed={pageCount === page}
          onClick={onPageChange(1)}
        >
          &gt;
        </Arrow>
      </Arrows>
    </Container>
  );
};

export default NewsListPagination;
