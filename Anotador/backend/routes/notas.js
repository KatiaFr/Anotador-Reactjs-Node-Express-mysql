const { Router } = require('express');
const router = Router();

const { qy } = require('../database');


//consigo entrar a: http://localhost:3001/anotador/notas
router.route('/')
    //tengo que poner async porque debo dejar establecido que voy a tener esta función asincrónica
    .get(async (req, res) => {

        try {
            let query = "SELECT * FROM notas";
            let response = await qy(query); //ejecuto la sentencia de const query, pedirle que me traiga select + from y la respuesta me la guardo en una variable

            const notas = response;
            res.json(notas); 
            console.log("probando get de notas")

            //res.status(200).send({"Hola. soy la respuesta que voy a crear en eSTE json que lleva llaves": response, query});

        }
        catch (msjerror) {
            console.error(msjerror.message); //lo muestro para mí
            res.status(413).send({ "error": msjerror.message }); //lo muestro al usuario

        }


    })

    .post(async (req, res) => {

        const title = req.body.title.toUpperCase();
        const descripcion = req.body.descripcion.toUpperCase();
        const autor = req.body.autor;
        const notasId = req.params.id;

        try {
            if (!title) {         //acá estoy neganando la existencia de nombre, por si se equivocan con el dato ingresado/solicitado del "nombre" y tirando error
                throw new Error("no está el autor enviado");
            }
            let query = "INSERT INTO notas (title, descripcion, autor) VALUES (?, ?, ?)";
            let response = await qy(query, [title, descripcion, autor]);

            console.log(response + "libro ingresado correctamente");
            res.status(200).send({ "Libro ingresado correctamente": title, descripcion, autor }); // "con id": response.insertId 

        }

        catch (msjinesperado) {
            console.error(msjinesperado.message); //lo muestro para mí
            res.status(413).send({ "error inesperado - faltan datos": msjinesperado.message }); //lo muestro al usuario

        }


    });


router.route('/:id')
    .get(async (req, res) => {
        try {
            let query = "SELECT * FROM notas WHERE id= ?";
            let response = await qy(query, [req.params.id]);
            if (response.length == 0) {
                throw new Error("nota no encontrada")
            }
            res.status(200).send({ "Respuesta": response });
        }
        catch (e) {
            console.error(e.message);
            res.status(413).send({ "Error": e.message });
        }
    });



module.exports = router;

/*

//método get id para listar una sola categoria
app.get("/categoria/:id", async (req, res) =>{
            //el :id va a parrar adentro de los res y params
   ;


*/



/*

//posterior a la conexión voy a llamar a util
const qy = util.promisify(conexion.query).bind(conexion); //permite el uso de async-away en la conexión mysql, cuando en realidad el async away que sólo funciona sobre promisses y no sobre callbacks como está acá hecho
//acá quedó almacenado conexion.query



//tengo que poner async porque debo dejar establecido que voy a tener esta función asincrónica
app.get("/categoria", async (req, res) => {
    try {
        const query = "SELECT * FROM categoria";
        const response = await qy(query); //ejecuto la sentencia de const query, pedirle que me traiga select + from y la respuesta me la guardo en una variable
        //le pasé el mismo parámetro que le pasaba a la query
        //await porque quiero que espere la respuesta antes de seguir avanzando con el programa

        res.status(200).send({
            "Respuesta": response
        });
    } catch (e) {
        console.error(e.message); //lo muestro para mí
        res.status(413).send({
            "Error": e.message
        }); //lo muestro al usuario
    }
});

//método get id para listar una sola categoria
app.get("/categoria/:id", async (req, res) => {
    //el :id va a parrar adentro de los res y params
    try {
        const query = "SELECT * FROM categoria WHERE id= ?";
        const response = await qy(query, [req.params.id]); //2do paámetro con un array que se va a llenar con los datos que se reciben en el id = ?

        res.status(200).send({
            "Respuesta": response
        });

    } catch (e) {
        console.error(e.message); //lo muestro para mí
        res.status(413).send({
            "Error, categoría no encontrada": e.message
        }); //lo muestro al usuario
    }
});


app.post("/categoria", async (req, res) => {
    try {
        // Valido que me manden correctamente la info
        if (!req.body.nombre) {
            throw new Error('Falta enviar el nombre');
        }
        //necesito verificar también que la cateogría solciitada, no se repita ante la solicitud. Si ya existe... entonces
        const nombre = req.body.nombre.toUpperCase();

        // Verifico que no exista previamente esa categoria
        let query = 'SELECT id FROM categoria WHERE nombre = ?';

        let response = await qy(query, [req.body.nombre.toUpperCase()]);

        if (response.length > 0) {
            throw new Error('Esa categoria ya existe');
        }

        // Guardo la nueva categoria
        query = 'INSERT INTO categoria (nombre) VALUE (?)';
        response = await qy(query, [nombre]);
        console.log(response + "vemos la respuesta del post a categoria");
        res.status(200).send({
            "se agregó la categoría con el siguiente número de id": response.insertId
        });
    } catch (e) {
        console.error(e.message); //lo muestro para mí
        res.status(413).send({
            "Error inesperado - faltan datos": e.message
        }); //lo muestro al usuario
    }
});

app.delete("/categoria/:id", async (req, res) => {
    try {

        let query = "SELECT * FROM libro WHERE categoria_id = ? ";

        let response = await qy(query, [req.params.id]);

        if (response.length > 0) {
            throw new Error("Esta categoria tiene libros asociados, no se puede borrar");
        }

        query = "DELETE FROM categoria WHERE id =?"; //no me puedo olvidar de poner where porque puedo borrar toda la tabla y estoy en problemas!!
        response = await qy(query, [req.params.id]);

        console.log(response + "esta es la respuesta al delete");
        res.status(200).send({
            "Se eliminó correctamente la siguiente cantidad de categorías ": response.affectedRows
        });
    } catch (e) {
        console.error(e.message); //lo muestro para mí
        res.status(413).send({
            "Categoría no encontrada o no se pudo eliminar": e.message
        }); //lo muestro al usuario
    }
});





*/