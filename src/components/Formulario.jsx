import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';


function Formulario({setCategoria, setIdioma, idioma}) {
    const opciones = () => {
        if (idioma === 'es') {
            return [
                { value: 'world', label: 'General' },
                { value: 'business', label: 'Negocios' },
                { value: 'entertainment', label: 'Entretenimiento' },
                { value: 'food', label: 'Salud' },
                { value: 'science', label: 'Ciencia' },
                { value: 'sport', label: 'Deportes' },
                { value: 'tech', label: 'Tecnología' },
                { value: 'gaming', label: 'Gaming' },
                { value: 'music', label: 'Música' },
                { value: 'travel', label: 'Viajes' },
        ]}else{
            return  [
                { value: 'world', label: 'General' },
                { value: 'business', label: 'Business' },
                { value: 'entertainment', label: 'Entertainment' },
                { value: 'food', label: 'Health' },
                { value: 'science', label: 'Science' },
                { value: 'sport', label: 'Sports' },
                { value: 'tech', label: 'Technology' },
                { value: 'gaming', label: 'Gaming' },
                { value: 'music', label: 'Music' },
                { value: 'travel', label: 'Travel' },
        ]}
    }


    const [categoria, SelectNoticias] = useSelect('general', opciones);

    const buscarNoticias = (e) => {
        e.preventDefault();
        setCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>{idioma==='es'? "Busca noticias por categoría" : "Search news by category"}</h2>
                    <SelectNoticias/>

                    <div className="input-field col s10">
                        <input type="submit" className={`${styles['btn-block']} btn-large amber darken-2`} value={idioma==='es' ? "Buscar" : "Search"}/>
                    </div>
                    <div className="input-field col s2">
                        <select value={idioma} onChange={e => setIdioma(e.target.value)} className={`${styles.lenguaje} selectA browser-default`}>
                            <option key={1} value="es">ESP</option>
                            <option key={2} value="en">ENG</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
