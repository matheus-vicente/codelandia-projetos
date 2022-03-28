import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --white-800: #F9F9F9;
    --purple-100: #D7D4FF;
    --purple-800: #6C63FF;
    --grey-100: #555555;
    --grey-600: #2A2A2A;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Lato, sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Merriweather, sans-serif;
  }
`;
