import styled from 'styled-components';

export const Table = styled.table`
    border-collapse:collapse;
    /* border-spacing:0 15px; */
    font-family: sans-serif;
    min-width: 750px;
    width: 80%;
    margin: 10em auto;

    th{
        color: #ddd;
        letter-spacing: .1em;
        padding: .8em;
        background-color: #3c5875;
        text-align: start;
        border: none;
        margin: 1em 0;
    }

    td{
        padding: 1em;
    }

    tbody tr:nth-child(even){
        background-color: #dbd8d8;
    }
    tbody tr:nth-child(odd){
        background-color: #f4f1f1;
    }
    

`