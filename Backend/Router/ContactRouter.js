const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../Controller/ContactController');

router.post('/add', createContact);
router.get('/all', getContacts);

module.exports = router;
