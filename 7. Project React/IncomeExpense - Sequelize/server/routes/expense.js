const expenseRouter = require("express").Router();
const ExpenseController = require("../controllers/ExpenseController");

expenseRouter.get("/", ExpenseController.getAllExpense);
expenseRouter.post("/", ExpenseController.addExpense);
expenseRouter.put("/:id", ExpenseController.updateExpense);
expenseRouter.delete("/:id", ExpenseController.deleteExpense);

module.exports = expenseRouter;
