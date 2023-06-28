import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --font-main: 'Open Sans', sans-serif;
    --font-roboto: 'Roboto', sans-serif;
    --font-roboto-slab: 'Roboto Slab', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    --web-font-smoothing: antialiased;
    font-family: var(--font-main);
  }
`;