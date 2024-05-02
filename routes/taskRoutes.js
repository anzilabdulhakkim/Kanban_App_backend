const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const createTask = require('../controllers/task/createTask')
const getAllTasks = require('../controllers/task/getAllTasks')
const getTaskById = require('../controllers/task/getTaskById')
const updateTask = require('../controllers/task/updateTask')
const deleteTask = require('../controllers/task/deleteTask')


router.use(authMiddleware);

router.get('/get', getAllTasks);
router.post('/create', createTask);
router.get('/get/:id', getTaskById);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
