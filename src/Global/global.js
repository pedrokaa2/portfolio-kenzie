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
    font-weight: 600;
  }

  h1 {
    color: var(--darkblue);
  }

  button {
    cursor: pointer;
    background: var(--lightblue);
    color: var(--almostWhite);
    border: 1px dotted var(--darkblue);
    border-radius: 20px; 
    padding: 20px;
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
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }
`