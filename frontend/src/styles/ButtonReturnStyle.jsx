import styled from "styled-components";

export const ButtonReturnStyle = styled.div`
    color: #ddd;
    padding: 5px 1em 5px .7em; 
    outline:  1.5px solid #ddd;
    font-size: 1.4em;  
    width: fit-content;
    border-radius: 10px;
    transition: transform .3s ease-in;

    &:hover{
        background-color:#dfd458;
        color: #232222;
        transform: scale(1.3);
    }

    svg{
        font-size: 1.5em;
    }

    &:active{
        transform: scale(.5);
    }
`