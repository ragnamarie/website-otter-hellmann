import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 0;
    min-height: 100vh; /* Change min-height to min-height: 100vh */
    min-width: 100%;
    display: flex;
    flex-direction: column; /* Make sure the container is a column layout */
  }

  header {

  }

  /* if any layout stuff is weird delete this part */
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  /* if any layout stuff is weird delete this part */
  
  body {
   
  }

  main {

  }

  footer {

  } 

  

`;
