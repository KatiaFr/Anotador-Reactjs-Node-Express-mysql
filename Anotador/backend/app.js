const express = require('express');
const app = express();

const cors = require('cors');


//middleware
app.use(cors());
app.use(express.json()); //para mapear el array
app.use(express.urlencoded());


//RUTAS: 

app.use('/anotador/usuarios', require('./routes/usuario'))  //consigo entrar a: http://localhost:3001/anotador/Usuario
app.use('/anotador/notas', require('./routes/notas'))   //consigo entrar a: http://localhost:3001/anotador/notas

//estas rutas se importaron en la carpeta routes mediante ROUTER y EN CADA Archivo de rutas hay que fijarse bien.

module.exports = app;
