import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { format } from 'date-fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const NewsImage = styled(LazyLoadImage)`
  min-height: 150px;
  height: 150px;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 2px 2px rgba(0,0,0,0.4);
  box-sizing: border-box;
`;

const NewsTitle = styled.div`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
`;

const NewsDate = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: rgba(0,0,0,0.6);
`;

const NewsDescription = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: rgba(0,0,0,0.9);
  letter-spacing: 0.25px;
  height: 100%;
`;

const NewsDetail = ({
  urlToImage,
  title,
  description,
  publishedAt,
  ...rest
}) => (
  <Container {...rest}>
    <NewsImage src={urlToImage} alt="Article Image" />
    <NewsTitle>{title}</NewsTitle>
    <NewsDate>{format(new Date(publishedAt), 'MMM dd, yyyy hh:mm aaa')}</NewsDate>
    <NewsDescription>
      <Scrollbars autoHide>
        {description}
      </Scrollbars>
    </NewsDescription>
  </Container>
);

export default NewsDetail;
