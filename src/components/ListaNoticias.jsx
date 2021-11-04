import React from 'react';
import Noticia from './Noticia';
import { v4 as uuid } from 'uuid';
import styles from './ListaNoticias.module.css';

function ListaNoticias({noticias, idioma}) {
    return (
        <div className={`${styles.body} row`}>
            {noticias?.map(noticia => (
                <Noticia key={uuid()} noticia={noticia} idioma={idioma}/>
            ))}
        </div>
    )
}

export default ListaNoticias
