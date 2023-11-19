const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },

    check: {
        type: Boolean,
        require: true,
        default: false,
    },

    date: {
        type: Date,
        default: Date.now(),
    },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
