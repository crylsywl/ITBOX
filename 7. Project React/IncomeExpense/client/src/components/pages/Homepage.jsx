import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../elements/Navbar/Navbar";
import Input from "../elements/Input/Input";
import Button from "../elements/Button/Button";
const Homepage = () => {
  const [name, setName] = useState([]);
  const [date, setDate] = useState([]);
  const [amount, setAmount] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const getIncome = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/incomes",
    })
      .then((response) => {
        setIncome(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the income data!", error);
      });
  };

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);
  const getExpense = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/expenses",
    })
      .then((response) => {
        setExpense(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the income data!", error);
      });
  };

  const incomeHandler = () => {
    if (!name || !date || !amount) {
      alert("Please fill in all fields");
      return;
    }

    axios({
      method: "POST",
      url: "http://localhost:3000/incomes",
      data: {
        name: name,
        date: date,
        amount: amount,
      },
    })
      .then(() => {
        alert("Income added successfully");
        setName("");
        setDate("");
        setAmount("");
        getIncome();
      })
      .catch((error) => {
        console.error("There was an error adding the income!", error);
      });
  };
  const expanseHandler = () => {
    if (!name || !date || !amount) {
      alert("Please fill in all fields");
      return;
    }

    axios({
      method: "POST",
      url: "http://localhost:3000/expenses",
      data: {
        name: name,
        date: date,
        amount: amount,
      },
    })
      .then(() => {
        alert("Expense added successfully");
        setName("");
        setDate("");
        setAmount("");
        getExpense();
      })
      .catch((error) => {
        console.error("There was an error adding the income!", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-[240px] my-[20px]">
        <div className="flex flex-col items-center my-[20px] gap-4">
          <h1 className="text-[40px] font-bold">
            Welcome to Income and Expense App
          </h1>
          <p>This is a simple app to track your income and expenses</p>
        </div>
        <div className="flex flex-col w-full items-center my-[20px]">
          <h1 className="text-[20px] font-bold">Transaction</h1>
          <div className="flex flex-col justify-center w-[50%] gap-4 my-[20px] m-[20px]">
            <Input
              Name="name"
              Type="text"
              Placeholder="Enter your transaction name"
              StyleField="w-full text-[12px] p-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
              Style="gap-0"
              OnChange={(e) => setName(e.target.value)}
              Value={name}
            />
            <Input
              Name="date"
              Type="date"
              StyleField="w-full text-[12px] p-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
              Style="gap-0"
              OnChange={(e) => setDate(e.target.value)}
              Value={date}
            />
            <Input
              Name="amount"
              Type="number"
              Placeholder="Enter amount"
              StyleField="w-full text-[12px] p-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
              Style="gap-0"
              OnChange={(e) => setAmount(e.target.value)}
              Value={amount}
            />
            <div className="flex flex-row gap-4">
              <Button Style="w-1/2 text-[12px]" OnClick={() => incomeHandler()}>
                Add Income
              </Button>
              <Button
                Style="w-1/2 text-[12px]"
                OnClick={() => expanseHandler()}
              >
                Add Expense
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px] w-full">
          <div>
            <h1 className="text-[20px] font-bold text-center">Income</h1>
            <div className="w-full overflow-auto rounded-xl shadow-md">
              <table className="w-full">
                <thead className="bg-blue-50 border-b-2 border-blue-300">
                  <tr>
                    <th className="w-[10%] p-4 text-sm font-semibold tracking-wide text-left">
                      No.
                    </th>
                    <th className="w-[50%] p-4 text-sm font-semibold tracking-wide text-left">
                      Transaction
                    </th>
                    <th className="w-[20%] p-4 text-sm font-semibold tracking-wide text-left">
                      Date
                    </th>
                    <th className="w-[20%] p-4 text-sm font-semibold tracking-wide text-left">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {income.map((incomes, index) => {
                    let rowClass =
                      index % 2 === 1
                        ? "bg-blue-50 hover:bg-blue-100"
                        : "bg-white hover:bg-blue-100";
                    return (
                      <tr key={incomes.id} className={rowClass}>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          {incomes.name}
                        </td>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          {incomes.date}
                        </td>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          Rp. {incomes.amount}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-bold text-center">Expense</h1>
            <div className="w-full overflow-auto rounded-xl shadow-md">
              <table className="w-full">
                <thead className="bg-blue-50 border-b-2 border-blue-300">
                  <tr>
                    <th className="w-[10%] p-4 text-sm font-semibold tracking-wide text-left">
                      No.
                    </th>
                    <th className="w-[50%] p-4 text-sm font-semibold tracking-wide text-left">
                      Transaction
                    </th>
                    <th className="w-[20%] p-4 text-sm font-semibold tracking-wide text-left">
                      Date
                    </th>
                    <th className="w-[20%] p-4 text-sm font-semibold tracking-wide text-left">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {expense.map((expenses, index) => {
                    let rowClass =
                      index % 2 === 1
                        ? "bg-blue-50 hover:bg-blue-100"
                        : "bg-white hover:bg-blue-100";
                    return (
                      <tr key={expenses.id} className={rowClass}>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          {expenses.name}
                        </td>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          {expenses.date}
                        </td>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          Rp. {expenses.amount}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
