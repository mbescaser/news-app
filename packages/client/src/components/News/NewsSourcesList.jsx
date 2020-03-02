import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import Loader from 'react-loader-spinner';

import useNewsContext from '../../contexts/news/useNewsContext';

const Container = styled.div`
  height: 100%;
  width: 300px;
  border: 1px solid rgba(0,0,0,0.2);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUnorderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  padding: 6px 12px;
  cursor: pointer;
  ${({ isActive }) => (isActive && `
    background-color: #eee;
    font-weight: 500;
  `)}

  &:hover {
    background-color: #eee;
  }
`;

const NewsSourceListItem = ({ children, ...rest }) => (
  <StyledListItem {...rest}>
    {children}
  </StyledListItem>
);

NewsSourceListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const NewsSourcesList = () => {
  const {
    state: {
      sources: {
        isFetchingSources,
        isFetchingSourcesFulfilled,
        data,
      },
      source: {
        sourceId,
      },
    },
    action: { handleGetSources, handleGetSource },
  } = useNewsContext();

  const handleClick = (id) => {
    handleGetSource({ sourceId: id, page: 1 });
  };

  useEffect(() => {
    handleGetSources();
  }, [handleGetSources]);

  return (
    <Container>
      {((!isFetchingSources && isFetchingSourcesFulfilled) && (
        <Scrollbars autoHide>
          <StyledUnorderList>
            {data.map(({ id, name }) => (
              <NewsSourceListItem
                key={id}
                isActive={id === sourceId}
                onClick={() => handleClick(id)}
              >
                {name}
              </NewsSourceListItem>
            ))}
          </StyledUnorderList>
        </Scrollbars>
      )) || (
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
    </Container>
  );
};

export default NewsSourcesList;
