const fs = require("fs");
const TodoView = require("../view/TodoView");

class Todo {
  constructor(id, name, age, city) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.city = city;
  }
  static getTodos() {
    let data = fs.readFileSync("./data.json", "utf8");
    let parsedData = JSON.parse(data);
    let todos = parsedData.map((el) => {
      const { id, name, age, city } = el;
      return new Todo(id, name, age, city);
    });
    return todos;
  }
  static show() {
    let todos = this.getTodos();
    return todos;
  }
  static add(params) {
    let todos = this.getTodos();
    let id = todos.length + 1;
    let name = params[0];
    let age = params[1];
    let city = params[2];
    let todo = new Todo(id, name, age, city);
    todos.push(todo);
    this.save(todos);
    return todos;
  }
  static delete(todo) {
    let todos = this.getTodos();
    let id = Number(todo[0]);
    todos = todos.filter(todo => todo.id !== id)
    this.save(todos);
    return todos
  }
  static update(todo) {
    let todos = this.getTodos();
    let id = Number(todo[0]);
    let name = todo[1];
    let age = todo[2];
    let city = todo[3];
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.name = name ? name : todo.name;
        todo.age = age ? age : todo.age;
        todo.city = city ? city : todo.city;
      }
    });
    this.save(todos);
    return todos
  }
  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 4));
  }
}

module.exports = Todo;
