import { useEffect, useState } from "react";
import React, { Fragment } from "react/cjs/react.production.min";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import fetch from 'node-fetch';
import ListaNoticias from "./components/ListaNoticias";
import './index.css';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `${API_URL}/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`;
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data);
      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
        <Header titulo="NotiApp"/>
        <div className="container white">
          <Formulario setCategoria={setCategoria}/>
          <ListaNoticias noticias={noticias}/>
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