const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  check: {
    type: Boolean,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
