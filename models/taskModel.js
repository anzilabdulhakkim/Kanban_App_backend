const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  status: { type: String, enum: ['to-do', 'in-progress', 'done'], default: 'to-do' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const taskModel = mongoose.model('Task', taskSchema)

module.exports = taskModel;
