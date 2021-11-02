import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';

function Header({titulo}) {
    return (
        <nav className={`${styles.header} nav-wrapper darken-3`}>
            <div className={styles.titulo}>
                <img src={logo} alt="Logo" className={styles.logo}/>
                <span href='#!' className={`brand-logo center`}>{titulo}</span>
            </div>

        </nav>
    )
}

export default Header
