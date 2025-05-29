const { income } = require("../models");

class IncomeController {
  static getAllIncome(req, res) {
    income
      .findAll()
      .then((incomes) => {
        res.json(incomes);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
  static addIncome(req, res) {
    const { name, date, amount } = req.body;
    income
      .create({ name, date, amount })
      .then((newIncome) => {
        res.status(201).json(newIncome);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
  static updateIncome(req, res) {
    const { id } = req.params;
    const { name, date, amount } = req.body;
    income
      .update({ name, date, amount }, { where: { id } })
      .then((rowsUpdated) => {
        if (rowsUpdated[0] === 0) {
          return res.status(404).json({ error: "Income not found" });
        }
        res.status(200).json({ message: "Income updated successfully" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
  static deleteIncome(req, res) {
    const id = +req.params.id;

    income
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

module.exports = IncomeController;
