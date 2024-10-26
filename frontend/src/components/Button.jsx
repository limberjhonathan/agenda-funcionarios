import { FaTrash } from "react-icons/fa"
import { StyledButton } from "../styles/StyledButton"
import { Link } from 'react-router-dom'

export default function Button() {
    function editElement(){
        console.log('cliquei')
    }

    function handleTrashClick(){
        console.log('deletado')
    }

    return (
        <div>
            <Link to={"/"}>
                <StyledButton onClick={editElement}>Editar</StyledButton>
            </Link>
            <FaTrash  onClick={handleTrashClick}/>
        </div>
    )
}