const command = process.argv[2];
const params = process.argv.slice(3);
const FlowController = require("./controller/flowController");

switch (command) {
  case "addIncome":
    FlowController.addIncome(params);
    break;
  case "listIncome":
    FlowController.listIncome();
    break;
  case "addExpense":
    FlowController.addExpense(params);
    break;
  case "listExpense":
    FlowController.listExpense();
    break;
  case "balance":
    FlowController.balance();
    break;
  default:
    FlowController.massage(
      "Invalid command. Please use 'addIncome', 'listIncome', 'addExpense', or 'listExpense'."
    );
    break;
}
