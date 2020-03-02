import { useContext } from 'react';

import NewsContext from './NewsContext';

const useNewsContext = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('Invalid use case, needs to be inside `NewsProvider` component.')
  }

  return context;
};

export default useNewsContext;
