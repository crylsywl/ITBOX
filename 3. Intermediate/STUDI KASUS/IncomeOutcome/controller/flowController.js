const Flow = require("../model/flow");
const FlowView = require("../view/flowView");

class FlowController {
    static listIncome() {
        let flows = Flow.listIncome();
        FlowView.listIncome(flows);
    }
    static listExpense() {
        let flows = Flow.listExpense();
        FlowView.listExpense(flows);
    }
    static addIncome(params) {
        let flows = Flow.addIncome(params);
        FlowView.addIncome(flows);
    }
    static addExpense(params) {
        let flows = Flow.addExpense(params);
        FlowView.addExpense(flows);
    }
    static balance() {
        let flows = Flow.balance();
        FlowView.balance(flows);
    }
    static massage(msg){
        FlowView.massage(msg);
    }
}

module.exports = FlowController;