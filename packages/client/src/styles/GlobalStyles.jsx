import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
