const Task = require('../../models/taskModel');

const updateTask = async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTask) {
        return res.status(404).send('Task not found.');
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).send('Error updating task.');
    }
};

module.exports = updateTask