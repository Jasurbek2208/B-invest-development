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

.head-title {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #402E32;
}

.tel {
      display: flex;
      flex-direction: column;

      p {
        text-align: right;
        font-size: 18px;
        line-height: 25px;
        color: #402e32;
      }

      a {
        text-align: right;
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: -0.04em;
        color: #d7b56d;
        margin-bottom: 2px;

        &:hover,
        &:focus {
          margin-bottom: 1px;
          outline: none;
          border-bottom: 1px solid #d7b56d;
        }
      }
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