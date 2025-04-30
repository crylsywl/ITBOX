class FlowView {
  static listIncome(flows) {
    console.log("List of Income Flows:");
    flows.forEach((flow) => {
      const { id, name, amount, category } = flow;
      console.log(`${id}. ${name} - Amount: ${amount}, Category: ${category}`);
    });
  }
  static listExpense(flows) {
    console.log("List of Expense Flows:");
    flows.forEach((flow) => {
      const { id, name, amount, category } = flow;
      console.log(`${id}. ${name} - Amount: ${amount}, Category: ${category}`);
    });
  }
  static addIncome(flows) {
    console.log("-----------------------------------");
    console.log("Income Flow Added Successfully!");
    console.log("-----------------------------------");
    console.log("List of Income Flows:");
    flows.forEach((flow) => {
      const { id, name, amount, category } = flow;
      console.log(`${id}. ${name} - Amount: ${amount}, Category: ${category}`);
    });
  }
  static addExpense(flows) {
    console.log("-----------------------------------");
    console.log("Expense Flow Added Successfully!");
    console.log("-----------------------------------");
    console.log("List of Income Flows:");
    flows.forEach((flow) => {
      const { id, name, amount, category } = flow;
      console.log(`${id}. ${name} - Amount: ${amount}, Category: ${category}`);
    });
  }
  static balance(flows) {
    const { totalIncome, totalExpense, balance } = flows;
    console.log("-----------------------------------");
    console.log("Total Pengeluaran dan Pemasukan:");
    console.log("-----------------------------------");
    console.log(`Total Pemasukan: ${totalIncome}`);
    console.log(`Total Pengeluaran: ${totalExpense}`);
    console.log(`Sisa Saldo: ${balance}`);
  }
  static massage(msg) {
    console.log(msg);
  }
}

module.exports = FlowView;
