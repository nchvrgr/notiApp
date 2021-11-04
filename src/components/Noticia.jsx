import React from 'react'
import styles from './Noticia.module.css';


function Noticia({noticia, idioma}) {

    const {media, link, title, excerpt, rights} = noticia;

    return (
        <div className="col s12 m6 l4">
            <div className={`${styles.card} card`}>
                <div className="card-image">
                    <img className={styles.imagen} src={media ? media : 'https://i.pinimg.com/564x/b6/e6/3a/b6e63a8ffc69aaaaddc8e3dad9b2592d.jpg'} alt="Imagen"/>
                    <span className={`${styles.fuente} card-title`}>{rights}</span>
                </div>
                <div className="card-content">
                    <h6 className={styles.title}>
                        <b>{title}</b>    
                    </h6>
                    <p className={styles.texto}>{excerpt}</p>
                </div>
                <div className="card-action">
                    <a href={link} target="_blank" rel="noopener noreferrer">{idioma==='es' ? "Ver Noticia Completa" : "See the full news"}</a>
                </div>
            </div>
        </div>
    )
}

export default Noticia
