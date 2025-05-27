const { todo } = require("../models");

class TodoController {
  static getTodo(req, res) {
    todo
      .findAll()
      .then((todos) => {
        res.json(todos);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static getTodoAdd(req, res) {
    const { task, status } = req.body;
    todo
      .create({ task, status })
      .then((todo) => {
        res.json(todo);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static findById(req, res) {
    let id = +req.params.id;
    todo
      .findByPk(id)
      .then((result) => {
        if (result !== null) {
          res.json(result);
        } else {
          res.json({ message: "Data not found" });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static deleteTodo(req, res) {
    let id = +req.params.id;
    todo
      .destroy({
        where: { id },
      })
      .then((result) => {
        if (result === 1) {
          res.json({ message: "Data deleted" });
        } else {
          res.json({ message: "Data not found" });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static updateTodo(req, res) {
    let id = +req.params.id;
    const { task, status } = req.body;
    todo
      .update(
        { task, status },
        {
          where: { id },
        }
      )
      .then((result) => {
        if (result[0] === 1) {
          res.json({ message: "Data updated" });
        } else {
          res.json({ message: "Data not found" });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
}

module.exports = TodoController;
