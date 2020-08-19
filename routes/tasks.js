const express = require('express');

const router = express.Router();

const tasksController = require('../controllers/tasksController');

router.post('/create', tasksController.create);
router.get('/destroy/:id', tasksController.destroy);

module.exports = router;