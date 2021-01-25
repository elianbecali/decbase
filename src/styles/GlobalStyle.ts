import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #000000;
    --mine-shaft: #212121;
    --dove-gray: #646464;
    --eunry: #CAA892;
    --viridian: #37806B;
    --limed-oak: #B0855B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
