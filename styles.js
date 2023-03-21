import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;


  }
  body {
    margin: 0;
    font-family: system-ui;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }


`;
