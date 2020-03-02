import { createContext } from 'react';

const NewsContext = createContext();

export const { Provider, Consumer } = NewsContext;
export default NewsContext;
