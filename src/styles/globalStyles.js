// src/styles/globalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global styles */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f8f8;
    color: #333;
  }

  /* Other global styles can be added here */

`;

export default GlobalStyles;