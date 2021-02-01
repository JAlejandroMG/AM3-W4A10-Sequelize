const express = require('express'); //Imporatción de express
const logger = require('morgan'); //Importación de morgan
require('dotenv').config();

const { Clients, Memberships, Payments, Registrations } = require('./models');


const app = express(); //Instancia de express
const PORT = process.env.PORT || 8000; //Toma variable de entorno o puerto 8000
app.use(logger('dev'));// Morgan para tener detalle de peticiones



// Tomar peticiones que van sobre la raíz
app.get('/', (req, res) => {
   res.send("Hola Mundo! Otra vez!")
});


/* CLIENTES */
app.get('/clients', async(req, res) => {
   try{
      const results = await Clients.findAll();
      // const results = await Clients.findAll({
      //    include: [Registrations, Payments]
      // });

      res.json(results);
   }catch(error){
      console.log(error);
   }
});
app.get('/clients/:id', async(req, res) => {
   try{
      const results = await Clients.findOne({where: {id: req.params.id}});

      res.json(results);
   }catch(error){
      console.log(error);
   }
});
app.post('/clients', async(req, res) => {
   try{
      const data = req.body;
      const results = await Clients.create(data);

      res.json({message: results});
   }catch(error){
      console.log(error);
   }
});


/* MEMBRESIAS */
app.get('/memberships', async(req, res) => {
   try{
      const results = await Memberships.findAll();
      // const results = await Memberships.findAll({
      //    include: [Registrations, Payments, Clients]
      // });

      res.json(results);
   }catch(error){
      console.log(error);
   }
});
app.get('/memberships/:id', async(req, res) => {
   try{
      const results = await Memberships.findOne({where: {id: req.params.id}});

      res.json(results);
   }catch(error){
      console.log(error);
   }
});
app.post('/memberships', async(req, res) => {
   try{
      const data = req.body;
      const results = await Memberships.create(data);

      res.json({message: results});
   }catch(error){
      console.log(error);
   }
});


/* PAGOS */
app.get('/payments', async(req, res) => {
   try{
      const results = await Payments.findAll();

      res.json(results);
   }catch(error){
      console.log(error);
   }
});
app.post('/payments', async(req, res) => {
   try{
      const data = req.body;
      const results = await Payments.create(data);

      res.json({message: results});
   }catch(error){
      console.log(error);
   }
});



// Método listen para recibir peticiones
app.listen(PORT, () => {
   console.log("Corriendo el servidor sobre el puerto", PORT);
});
