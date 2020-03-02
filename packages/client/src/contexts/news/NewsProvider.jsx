import React, {
  useRef,
  useEffect,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

import { Provider } from './NewsContext';
import useNewsReducer from './useNewsReducer';

const initialState = {
  sources: {
    isFetchingSources: false,
    isFetchingSourcesFulfilled: false,
    isFetchingSourcesRejected: false,
    data: [],
  },
  source: {
    isFetchingSource: false,
    isFetchingSourceFulfilled: false,
    isFetchingSourceRejected: false,
    data: [],
    page: 1,
    perPage: 10,
    totalResults: 0,
    sourceId: '',
  },
};

const NewsProvider = ({ children }) => {
  const { state, dispatch } = useNewsReducer({ initialState });
  const isMounted = useRef(false);

  const handleGetSources = useCallback(
    async ({ language } = { language: 'en' }) => {
      dispatch({ type: '@news/GET_SOURCES' });

      try {
        const response = await fetch(`http://localhost:1337/api/sources?language=${language}`);
        const json = await response.json();

        if ('message' in json) {
          throw new Error(json.message);
        }

        if (isMounted.current) {
          dispatch({ type: '@news/GET_SOURCES_FULFILLED', payload: json.sources });
        }
      } catch (error) {
        if (isMounted.current) {
          dispatch({ type: '@news/GET_SOURCES_REJECTED', payload: error.message });
        }
      }
    },
    [dispatch],
  );

  const handleGetSource = useCallback(
    async ({ sourceId, page }) => {
      dispatch({ type: '@news/GET_SOURCE', payload: { sourceId, page } });

      try {
        const response = await fetch(`http://localhost:1337/api/sources/${sourceId}?page=${page}`);
        const json = await response.json();

        if ('message' in json) {
          throw new Error(json.message);
        }

        if (isMounted.current) {
          dispatch({ type: '@news/GET_SOURCE_FULFILLED', payload: json });
        }
      } catch (error) {
        if (isMounted.current) {
          dispatch({ type: '@news/GET_SOURCE_REJECTED', payload: error.message });
        }
      }
    },
    [dispatch],
  );

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const value = {
    state,
    action: {
      handleGetSources,
      handleGetSource,
    },
  };

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

NewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewsProvider;
