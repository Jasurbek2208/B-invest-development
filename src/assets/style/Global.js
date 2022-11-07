import { createGlobalStyle } from "styled-components";

import "./font.css";
import "./icon.css";
export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
}

.container {
    margin: 0 auto;
    padding: 0px 16px;
    max-width: 1280px;
}


@media (max-width: 500px) {
    .head-title {
      font-weight: 600 !important;
      font-size: 34px !important;
    }
  }

  @media (max-width: 380px) {
    .head-title {
      font-weight: 600 !important;
      font-size: 24px !important;
    }
  }
`