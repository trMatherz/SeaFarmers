const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Update Topic Progress
router.post('/user/:userId/progress/topic', userController.updateTopicProgress);

// Update Problem Progress
router.post('/user/:userId/progress/problem', userController.updateProblemProgress);

router.post('/solveProblem', userController.solveProblem);

// Route to get the current user data
router.get('/', userController.getUserData);

module.exports = router;
