import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//app de frontend 
import axios from "axios";



import Navegador from './components/Navegador';
import Persona from './components/Persona';
import CrearNotas from './components/CrearNotas';
import ListaDeNotas from './components/ListaDeNotas'; //El que vas a ver como página principal - home al entrar a: http://localhost:3000/


function App() {
  return (
    <BrowserRouter>

          <Navegador/>

          <Route exact path="/" component={ListaDeNotas}/> 
          <Route path="/edit/:id" component={CrearNotas}/>
          <Route path="/crear" component={CrearNotas}/>
          <Route path="/persona" component={Persona}/>

    </BrowserRouter>
  );
}

      /* 

       <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */

export default App;
