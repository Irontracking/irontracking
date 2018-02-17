const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const passport = require('passport');

router.get('/', adminController.getDashboard);

module.exports = router;