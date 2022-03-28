import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --white-200: #f7fafc;
    --gray-50: #e8e8e8;
    --gray-800: #1A202C;
    --blue: #2B6CB0;
    --green: #04C35C;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button, input, textarea, span {
    color: var(--gray-800);
  }

  body {
    font-family: Lato, sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--gray-800);
    font-family: Merriweather, sans-serif;
  }

  a {
    color: var(--blue);
    text-decoration: none;
  }
`;
