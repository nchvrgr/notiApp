import React from 'react'
import styles from './Noticia.module.css';


function Noticia({noticia}) {

    const {urlToImage, url, title, description, source} = noticia;

    return (
        <div className="col s12 m6 l4">
            <div className={`${styles.card} card`}>
                <div className="card-image">
                    <img className={styles.imagen} src={urlToImage ? urlToImage : 'https://i.pinimg.com/564x/b6/e6/3a/b6e63a8ffc69aaaaddc8e3dad9b2592d.jpg'} alt="Imagen"/>
                    <span className={`${styles.fuente} card-title`}>{source.name}</span>
                </div>
                <div className="card-content">
                    <h6 className={styles.title}>{title}</h6>
                    <p className={styles.texto}>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer">Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}

export default Noticia
