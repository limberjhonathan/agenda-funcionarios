import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none; 
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        font-family: sans-serif;
    }

    body{
        width: 100%;
        height: 100%;
        background-color: #153446;
    }
`