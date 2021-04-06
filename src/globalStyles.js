import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
padding: 0;
box-sizing:0;
font-family: 'Montserrat', sans-serif;
}

html, body {
    overflow-x: hidden;
}
`;

export default GlobalStyle;
