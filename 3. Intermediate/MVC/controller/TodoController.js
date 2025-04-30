const Todo = require("../model/Todo");
const TodoView = require("../view/TodoView");

class TodoController {
  static show() {
    let todos = Todo.show();
    TodoView.show(todos);
  }
  static add(params) {
    let todos = Todo.add(params);
    TodoView.add(todos);
  }

  static delete(params) {
    let todos = Todo.delete(params);
    TodoView.delete(todos);
  }

  static update(params) {
    let todos = Todo.update(params);
    TodoView.update(todos);
  }
}

module.exports = TodoController;
