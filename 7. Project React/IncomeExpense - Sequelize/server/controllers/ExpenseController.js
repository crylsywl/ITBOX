const { expense } = require('../models');

class ExpenseController {
  static getAllExpense(req, res) {
    expense
      .findAll()
      .then((expenses) => {
        res.json(expenses);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
  static addExpense(req, res) {
    const { name, date, amount } = req.body;
    expense
      .create({ name, date, amount })
      .then((newExpense) => {
        res.status(201).json(newExpense);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
  static updateExpense(req, res) {
    const { id } = req.params;
    const { name, date, amount } = req.body;
    expense
      .update({ name, date, amount }, { where: { id } })
      .then((rowsUpdated) => {
        if (rowsUpdated[0] === 0) {
          return res.status(404).json({ error: "expense not found" });
        }
        res.status(200).json({ message: "expense updated successfully" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
  static deleteExpense(req, res) {
    const id = +req.params.id;

    expense
      .destroy({
        where: { id },
      })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
}

module.exports = ExpenseController;
