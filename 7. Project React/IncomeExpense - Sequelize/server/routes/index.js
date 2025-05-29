const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Finance Tracker API",
  });
});

const incomeRoute = require("./income");
const expenseRoute = require("./expense");

routes.use("/income", incomeRoute);
routes.use("/expense", expenseRoute);

module.exports = routes;
