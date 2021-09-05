import { createGlobalStyle } from "styled-components";
import config from '../config.json';

const Global = createGlobalStyle`

    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Lato', sans-serif;
    }

    #root{
        width: 100%;
        height: max-content;
        min-height:100vh;
        background-color: ${config.colors.background};
        color:white;
    }

    a{
        text-decoration:none;
        color: inherit;
    }
    
    input{
        border: none;
        color:inherit;
    }

    input:focus{
        outline: none;
    }

`

export default Global;