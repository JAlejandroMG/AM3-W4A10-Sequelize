const { Clients, Payments, Registrations } = require('../models/');



const getClients = async (req, res) => {
   try{
      const results = await Clients.findAll({
         include: [
            {
               model: Registrations,
               include: Payments
            }
         ]
      });
      // const results = await Clients.findAll({
      //    include: [Registrations, Payments]
      // });

      res.json(results);
   }catch(error){
      console.log(error);
   }
};


const getClientById = async (req, res) => {
   try{
      const results = await Clients.findOne({where: {id: req.params.id}});

      res.json(results);
   }catch(error){
      console.log(error);
   }
};


const addClient = async (req, res) => {
   try{
      const data = req.body;
      const results = await Clients.create(data);

      res.json({message: results});
   }catch(error){
      console.log(error);
   }
};



module.exports = {
   getClients,
   getClientById,
   addClient
}
