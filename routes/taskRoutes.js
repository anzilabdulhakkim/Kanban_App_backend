const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const createTask = require('../controllers/task/createTask')
const getAllTasks = require('../controllers/task/getAllTasks')
const getTaskById = require('../controllers/task/getTaskById')
const updateTask = require('../controllers/task/updateTask')
const deleteTask = require('../controllers/task/deleteTask')


router.use(authMiddleware);

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
