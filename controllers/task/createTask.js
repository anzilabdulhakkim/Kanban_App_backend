const Task = require('../../models/taskModel');


const createTask = async (req, res) => {
    try {
      const newTask = new Task(req.body);
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).send('Error creating task.');
    }
};

module.exports = createTask;