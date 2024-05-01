const Task = require('../../models/taskModel');


const getTaskById = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).send('Task not found.');
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).send('Error retrieving task.');
    }
};

module.exports = getTaskById;