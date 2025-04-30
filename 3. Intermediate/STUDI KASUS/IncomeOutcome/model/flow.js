const fs = require("fs");
class Flow {
  constructor(id, name, amount, category) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.category = category;
  }

  static getIncome() {
    let data = fs.readFileSync("./data.json", "utf8");
    let parsedData = JSON.parse(data);
    let flows = parsedData.income.map((item) => {
      const { id, name, amount, category } = item;
      return new Flow(id, name, amount, category);
    });
    return flows;
  }
  static getExpense() {
    let data = fs.readFileSync("./data.json", "utf8");
    let parsedData = JSON.parse(data);
    let flows = parsedData.expense.map((item) => {
      const { id, name, amount, category } = item;
      return new Flow(id, name, amount, category);
    });
    return flows;
  }
  static listIncome() {
    const flows = this.getIncome();
    return flows;
  }
  static listExpense() {
    const flows = this.getExpense();
    return flows;
  }
  static addIncome(params) {
    let flows = this.getIncome();
    let id = flows.length + 1;
    let name = params[0];
    let amount = parseInt(params[1]);
    let category = params[2];
    let newFlows = new Flow(id, name, amount, category);
    flows.push(newFlows);
    this.saveIncome(flows);
    return flows;
  }
  static addExpense(params) {
    let flows = this.getExpense();
    let id = flows.length + 1;
    let name = params[0];
    let amount = parseInt(params[1]);
    let category = params[2];
    let newFlows = new Flow(id, name, amount, category);
    flows.push(newFlows);
    this.saveExpense(flows);
    return flows;
  }

  static balance() {
    let income = this.getIncome();
    let expense = this.getExpense();
    let totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
    let totalExpense = expense.reduce((acc, curr) => acc + curr.amount, 0);
    let balance = totalIncome - totalExpense;
    return {
      totalIncome,
      totalExpense,
      balance,
    };
  }
  
  static saveIncome(newIncomeData) {
    let data = fs.readFileSync("./data.json", "utf8");
    let parsedData = JSON.parse(data);

    parsedData.income = newIncomeData; // hanya update income

    fs.writeFileSync("./data.json", JSON.stringify(parsedData, null, 4));
  }
  static saveExpense(newIncomeData) {
    let data = fs.readFileSync("./data.json", "utf8");
    let parsedData = JSON.parse(data);

    parsedData.expense = newIncomeData; // hanya update income

    fs.writeFileSync("./data.json", JSON.stringify(parsedData, null, 4));
  }
}

module.exports = Flow;
