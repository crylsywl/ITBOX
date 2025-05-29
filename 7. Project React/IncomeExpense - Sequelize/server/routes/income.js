const incomeRouter = require('express').Router();
const IncomeController = require('../controllers/IncomeController');

incomeRouter.get("/", IncomeController.getAllIncome);
incomeRouter.post("/", IncomeController.addIncome);
incomeRouter.put("/:id", IncomeController.updateIncome);
incomeRouter.delete("/:id", IncomeController.deleteIncome);

module.exports = incomeRouter;