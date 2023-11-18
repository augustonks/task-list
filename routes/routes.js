const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.get("/getById/:id/:method", TaskController.getById);
routes.get("/delete/:task", TaskController.deleteTask);
routes.post("/create", TaskController.createTask);
routes.post("/update/:id", TaskController.updateTask);

module.exports = routes;
