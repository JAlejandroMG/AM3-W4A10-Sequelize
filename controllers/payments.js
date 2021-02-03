const { Clients, Payments, Registrations } = require('../models/');



const getPayments = async (req, res) => {
   try{
      const results = await Payments.findAll({
         include: [
            {
               model: Registrations,
               include: Clients
            }
         ]
      });

      res.json(results);
   }catch(error){
      console.log(error);
   }
};


const addPayment = async (req, res) => {
   try{
      const data = req.body;
      const results = await Payments.create(data);

      res.json({message: results});
   }catch(error){
      console.log(error);
   }
};



module.exports = {
   getPayments,
   addPayment
}
