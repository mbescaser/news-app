import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case '@news/GET_SOURCES':
      return {
        ...state,
        sources: {
          ...state.sources,
          isFetchingSources: true,
          isFetchingSourcesFulfilled: false,
          isFetchingSourcesRejected: false,
          data: [],
          error: null,
        },
      };
    case '@news/GET_SOURCES_FULFILLED':
      return {
        ...state,
        sources: {
          ...state.sources,
          isFetchingSources: false,
          isFetchingSourcesFulfilled: true,
          data: action.payload,
        },
      };
    case '@news/GET_SOURCES_REJECTED':
      return {
        ...state,
        sources: {
          ...state.sources,
          isFetchingSources: false,
          isFetchingSourcesRejected: true,
          error: action.payload,
        },
      };
    case '@news/GET_SOURCE':
      return {
        ...state,
        source: {
          ...state.source,
          isFetchingSource: true,
          isFetchingSourceFulfilled: false,
          isFetchingSourceRejected: false,
          data: [],
          error: null,
          page: action.payload.page,
          sourceId: action.payload.sourceId,
        },
      };
    case '@news/GET_SOURCE_FULFILLED':
      return {
        ...state,
        source: {
          ...state.source,
          isFetchingSource: false,
          isFetchingSourceFulfilled: true,
          data: action.payload.articles,
          totalResults: action.payload.totalResults,
        },
      };
    case '@news/GET_SOURCE_REJECTED':
      return {
        ...state,
        source: {
          ...state.source,
          isFetchingSource: false,
          isFetchingSourceRejected: true,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

const useNewsReducer = ({ initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useNewsReducer;
