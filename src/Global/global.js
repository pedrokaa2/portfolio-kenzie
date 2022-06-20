import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --almostWhite: #edeef1;
    --lightblue: #485276;
    --darkblue: #26293f;
  }

  body {
    background: var(--almostWhite);
    color: var(--darkblue);
    height: 100vh;
  }

  h1, button, span {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  p {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }

  h3 {
    font-family: 'Londrina Solid', sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`