
//rutas de usuario

const {Router} = require('express');
const router = Router();


router.route('/') 
        .get((req, res) => res.send ('algo en USUARIOS routes get'))
        .post((req, res) => res.json ({message: 'algo en USUARIOS routes POST'}))
        
        .delete((req, res) => res.json ({message: 'ELLIMINAR usuario'}));


//app.get('/usuarios', (req, res) => res.send('probando la ruta che'));



module.exports = router;
