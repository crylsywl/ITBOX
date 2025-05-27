const todoRouter = require("express").Router();
const TodoController = require("../Controller/TodoController");

todoRouter.get("/", TodoController.getTodo);
todoRouter.post("/add", TodoController.getTodoAdd);
todoRouter.get("/find/:id", TodoController.findById);
todoRouter.delete("/delete/:id", TodoController.deleteTodo);
todoRouter.put("/update/:id", TodoController.updateTodo);

module.exports = todoRouter;
