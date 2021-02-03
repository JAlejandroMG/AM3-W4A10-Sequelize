const express = require('express');

const { getRegistrations, addRegistration } = require('../controllers/registrations');

const router = express.Router();



router.get('/registrations', getRegistrations);
router.post('/registrations', addRegistration);



module.exports = router;
