const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mail.controller');

router.post('/send', mailController.sendMail);

module.exports = router;