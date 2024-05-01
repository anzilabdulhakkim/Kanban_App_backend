const Task = require('../../models/taskModel');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send('Error retrieving tasks.');
  }
};

module.exports = getAllTasks;