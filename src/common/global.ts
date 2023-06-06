import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body {
        box-sizing: border-box;
        background-color: #a9a9a9;
    }

    a {
        color: #000;
    }
`;
