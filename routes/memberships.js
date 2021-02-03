const express = require('express');

const { getMemberships, getMembershipById, addMembership } = require('../controllers/memberships');

const router = express.Router();



router.get('/memberships', getMemberships);
router.get('/memberships/:id', getMembershipById);
router.post('/memberships', addMembership);



module.exports = router;
