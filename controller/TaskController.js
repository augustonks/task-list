const Task = require("../models/Task");

let message = "";
let type = "";

const getAllTasks = async (req, res) => {
    try {
        setTimeout(() => {
            message = "";
        }, 500);
        const taskList = await Task.find();
        return res.render("index", {
            taskList,
            task: null,
            taskDelete: null,
            message,
            type,
        });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const createTask = async (req, res) => {
    const task = req.body;

    console.log(task);

    if (!task.task) {
        message = "Tarefa inválida";
        type = "danger";
        console.log("redirect");
        return res.redirect("/");
    }

    try {
        await Task.create(task);
        message = "Tarefa criada com sucesso";
        type = "sucess";
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const getById = async (req, res) => {
    try {
        const taskList = await Task.find();

        if (req.params.method == "update") {
            const task = await Task.findById(req.params.id);
            res.render("index", {
                taskList,
                task,
                taskDelete: null,
                message,
                type,
            });
        } else {
            const taskDelete = await Task.findById(req.params.id);
            res.render("index", {
                taskList,
                task: null,
                taskDelete,
                message,
                type,
            });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = req.body;
        await Task.updateOne({ _id: req.params.id }, task);
        message = "Tarefa atualizada com sucesso";
        type = "sucess";
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.deleteOne({ task: req.params.task });
        message = "Tarefa deletada com sucesso";
        type = "sucess";
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateTask,
    deleteTask,
};
