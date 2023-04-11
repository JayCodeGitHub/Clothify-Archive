import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        background-color: #ECE9EA;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;