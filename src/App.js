import { useEffect, useState } from "react";
import React, { Fragment } from "react/cjs/react.production.min";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import axios from "axios";
import ListaNoticias from "./components/ListaNoticias";
import './index.css';



const API_KEY = 'c18fb43629294471b30af9c552ed7c9e';
const API_URL = 'https://newsapi.org';

const App = () => {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `${API_URL}/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`;
      const respuesta = await axios.get(url);
      const {data} = await respuesta;
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