import { Link } from 'react-router-dom'
import styles from '../styles/ButtonAddEmployee.module.css'

export default function AddEmployee() {
    return(
        <Link className={styles.btn} to={"/edit"}>
            Adicionar funcionario
        </Link>
    )   
}