import React, { useState } from 'react';
import styles from './useSelect.module.css';

const useSelect = (initialState, opciones) => {

    const [state, setState] = useState(initialState)

    const SelectNoticias = () => (
        <select className={`${styles.select} browser-default`} value={state} onChange={e => setState(e.target.value)}>
            {
            opciones ? opciones().map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            )) : null
            }
        </select>
    );
    return [state, SelectNoticias];
}

export default useSelect;
