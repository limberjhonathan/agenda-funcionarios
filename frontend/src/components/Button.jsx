import { FaTrash } from "react-icons/fa"
import { StyledButton } from "../styles/StyledButton"

export default function Button() {
    function editElement(){
        console.log('cliquei')
    }

    function handleTrashClick(){
        console.log('deletado')
    }

    return (
        <div>
            <StyledButton onClick={editElement}>Editar</StyledButton>
            <FaTrash  onClick={handleTrashClick}/>
        </div>
    )
}