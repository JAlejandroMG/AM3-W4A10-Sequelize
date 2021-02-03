const express = require('express'); //Imporatción de express
const logger = require('morgan'); //Importación de morgan

const clientsRouter = require('./routes/clients');
const membershipsRouter = require('./routes/memberships');
const paymentsRouter = require('./routes/payments');
const registrationsRouter = require('./routes/registrations');

require('dotenv').config();

const PORT = process.env.PORT || 8000; //Toma variable de entorno o puerto 8000

const app = express(); //Instancia de express
app.use(express.json()); //configuracion de express para interpretar los datos que se reciben en formato JSON
app.use(logger('dev')); // Morgan para tener detalle de peticiones



// Tomar peticiones que van sobre la raíz
app.get('/', (req, res) => {
   res.send("Hola Mundo! Otra vez!")
});


app.use(clientsRouter);

app.use(membershipsRouter);

app.use(paymentsRouter);

app.use(registrationsRouter);



// Método listen para recibir peticiones
app.listen(PORT, () => {
   console.log("Corriendo el servidor sobre el puerto", PORT);
});
