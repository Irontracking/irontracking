const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const passport = require('passport');

router.get('/', adminController.getAdminDashboard);

router.post('/newExercise', adminController.newExercise);

/*
router.get('/:id/edit', adminController.edit);
router.post('/:id', adminController.update);
router.post('/:id/delete', adminController.delete);
*/


module.exports = router;
