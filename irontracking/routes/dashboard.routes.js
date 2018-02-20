const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const passport = require('passport');

router.get('/', dashboardController.getDashboard
);

/*
router.post('/save', (req, res, next) => {
  dashboardController.updateExerciseUser
});
*/

module.exports = router;