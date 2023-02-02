// global styles for the app styled components

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

    html {
      box-sizing: border-box;
      font-size: 80%;

      ${({ theme }) => theme.minBp("tablet")} {
          font-size: 55%;
      }

      ${({ theme }) => theme.minBp("desktop")} {
          font-size: 16px;
      }
    }
 


  `;

export default GlobalStyles;
