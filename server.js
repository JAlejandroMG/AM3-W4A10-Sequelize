const express = require('express'); //Imporatción de express
const logger = require('morgan'); //Importación de morgan
require('dotenv').config();

const PORT = process.env.PORT;

const app = express(); //Instancia de express

// Morgan para tener detalle de peticiones
app.use(logger('dev'));

// Tomar peticiones que van sobre la raíz
app.get('/', (req, res) => {
   res.send("Hola Mundo! Otra vez!")
});

// Método listen para recibir peticiones
app.listen(PORT, () => {
   console.log("Corriendo el servidor sobre el puerto", PORT);
});
