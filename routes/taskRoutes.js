const express = require('express');

const taskController = require('../controller/taskController');

const router = express.Router();

router.post('/add-task',taskController.addTask);

router.get('/get-tasks',taskController.getTasks);

router.get('/delete-task/:id',taskController.deleteTask)

router.get('/get-task/:id',taskController.getTask)


module.exports = router;