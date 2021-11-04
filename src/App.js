import { useEffect, useState } from "react";
import React, { Fragment } from "react/cjs/react.production.min";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import axios from "axios";
import ListaNoticias from "./components/ListaNoticias";
import './index.css';

const App = () => {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);
  const [idioma, setIdioma] = useState('es');

  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await axios.get(
        `https://api.newscatcherapi.com/v2/search?q=all&page_size=9&lang=${idioma}&topic=${categoria}`,
        {headers: {
          'x-api-key': 'w-dRmx4mW2ivHZsyF70vjgc7yMsRiDW6Kdnq0CJImCA'
      }});
      const {data} = await respuesta;
      console.log(data);
      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria, idioma]);

  return (
    <Fragment>
        <Header titulo="NotiApp"/>
        <div className="container">
          <Formulario setCategoria={setCategoria} setIdioma={setIdioma} idioma={idioma}/>
          <ListaNoticias noticias={noticias} idioma={idioma}/>
        </div>
        <footer className="footer">
          <span> 
            Creado por <a href="https://www.github.com/nchvrgr" target='_blank' rel='noreferrer'>Nacho</a>
          </span>
        </footer>
    </Fragment>

  );
}

export default App;