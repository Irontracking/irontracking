const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const passport = require('passport');

router.get('/', adminController.getAdminDashboard);

router.post('/newExercise', adminController.newExercise);

router.post('/update', adminController.updateExercise);

router.post('/delete', adminController.deleteExercise);


module.exports = router;