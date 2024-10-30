import { Link } from "react-router-dom";
import Container from "./Container";
import iconFunc from '../assets/icon-func.png';
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav>
            <Container>
                <Link className={styles.container_link} to={'/'}>
                    <img src={iconFunc} alt="" />
                </Link>
                <ul className={styles.list}>
                    <li>
                        <Link to={"/list"}>Funcionarios</Link>
                    </li>
                    <li>
                        <Link to={'/addemployee'}>Adicionar</Link>
                    </li>
                    <li>
                        <Link>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}