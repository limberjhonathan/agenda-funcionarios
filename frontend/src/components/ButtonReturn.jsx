import { ButtonReturnStyle } from "../styles/ButtonReturnStyle";
import { FaCaretLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'


export default function ButtonReturn(){

    return(
        <Link to={"/"}>
            <ButtonReturnStyle>
                <FaCaretLeft/>
            </ButtonReturnStyle>
        </Link>
    )
}