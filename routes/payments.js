const express = require('express');

const { getPayments, addPayment } = require('../controllers/payments');

const router = express.Router();



router.get('/payments', getPayments);
router.post('/payments', addPayment);



module.exports = router;
