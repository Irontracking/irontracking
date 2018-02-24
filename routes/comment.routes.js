const express = require('express');
const router = express.Router();
const mailController = require('../controllers/comment.controller');

router.post('/send', mailController.sendMail);

module.exports = router;