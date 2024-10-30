import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.aboutCompany}>
                <Link>Sobre nós</Link>
                <Link>Nossos Valores</Link>
                <Link>Contatos</Link>
                <Link>Novidades</Link>
            </div>
            <div className={styles.contacts}>
                <h3>Nossos contatos</h3>
                <address>
                    <SiWhatsapp />
                    <AiFillInstagram />
                    <FaFacebook />
                </address>
            </div>
        </footer>
    )
}