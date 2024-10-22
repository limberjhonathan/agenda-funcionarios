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

    tr td:has(Button) {

        div{
            display: flex;
            justify-content: space-around;
            align-items: center;

            svg{
                color: #cd3535;
                font-size: 1.2em;
                cursor: pointer;
                transition: transform 0.3s ease;
            }

            button{
                transition: transform 0.3s ease;
            }
            button:hover{
                transform: scale(1.15);
            }

            svg:hover{
                transform: scale(1.3);
            }

            svg:active, button:active{
                transform: scale(0.8);
            }
        }
        
    }
`