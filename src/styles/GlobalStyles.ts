import { createGlobalStyle } from "styled-components";
import { Variables } from "./index";

export const GlobalStyles = createGlobalStyle`
  ${Variables};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }
  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }
  body::-webkit-scrollbar {
    width: 6px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }
  body {
    padding: 1.25rem 1.5rem;
    font-family: var(--font-main);
    background-color: var(--main-background);
    color: var(--main-color);
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--main-color);
  }
`;
