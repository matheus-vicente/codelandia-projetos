import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #181818;
    --white: #f9f9f9;
    --white-200: #ebe9ea;
    --grey: #474747;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`
