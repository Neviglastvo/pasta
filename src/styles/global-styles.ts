import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,500,700&display=swap");

  ${reset}

  *{
    box-sizing: border-box;
  }

  *,*:focus,*:hover{
    outline:none;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  a{
    text-decoration: none;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  svg{
    fill: #000;

    > * {
      pointer-events: none;
    }
  }
`;
