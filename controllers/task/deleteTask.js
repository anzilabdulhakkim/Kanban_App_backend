const Task = require('../../models/taskModel');


const deleteTask = async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).send('Task not found.');
      }
      res.status(200).json(deletedTask);
    } catch (error) {
      res.status(500).send('Error deleting task.');
    }
};

module.exports = deleteTask