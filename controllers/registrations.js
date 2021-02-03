const { Registrations } = require('../models/');



const getRegistrations = async (req, res) => {
   try{
      const results = await Registrations.findAll();

      res.json(results);
   }catch(error){
      console.log(error);
   }
};


const addRegistration = async (req, res) => {
   try{
      const data = req.body;
      const results = await Registrations.create(data);

      res.json({message: results});
   }catch(error){
      console.log(error);
   }
};



module.exports = {
   getRegistrations,
   addRegistration
}
