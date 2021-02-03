const express = require('express');

const { getClients, getClientById, addClient } = require('../controllers/clients');

const router = express.Router();



router.get('/clients', getClients);
router.get('/clients/:id', getClientById);
router.post('/clients', addClient);



module.exports = router;
