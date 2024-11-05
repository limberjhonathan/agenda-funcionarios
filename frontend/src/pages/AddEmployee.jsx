import { useState } from 'react';
import styles from '../styles/AddEmployeeStyle.module.css'

export default function AddEmployee(){
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return(
        <div className={styles.content_form}>
            <h1>Cadastrar funcionario</h1>
            <form>
                <label htmlFor="name">Nome:</label>
                <input type="text" id='name' autoComplete='off' className={styles.input}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id='email' autoComplete='off' className={styles.input}/>

                <label htmlFor="money">Salario:</label>
                <input type="number" id='money' autoComplete='off' className={styles.input}/>

                <label htmlFor="categorias">Escolha uma categoria:</label>
                <select className={styles.select} id="categorias" name="categorias" value={selectedCategory} onChange={handleChange}>
                    {selectedCategory === '' && <option value="" disabled >Escolha uma categoria...</option>}
                    <option value="Desenvolvedor">Desenvolvedor</option>
                    <option value="Analista">Analista</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Scrum">Scrum</option>
                </select>
                <input type="submit" value='enviar' className={styles.btn}/>
            </form>
        </div>
    )
}