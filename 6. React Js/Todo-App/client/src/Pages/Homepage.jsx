import { useState, useEffect } from "react";
import Navbar from "../Component/Elements/Navbar/Navbar";
import Button from "../Component/Elements/Button/Button";
import Input from "../Component/Elements/Input/Input";
import axios from "axios";
const Homepage = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();

  const submitHandler = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/todos",
      data: {
        task,
        status: "pending",
        priority: "low",
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    getData();
  };

  const getData = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/todos",
    })
      .then((todos) => {
        setTodos(todos.data);
      })
      .catch((err) => {
        alert("Error fetching todos:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleStatusChange = (e, id) => {
    const newStatus = e.target.value;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);

    // Optional: update ke server jika backend mendukung
    // axios
    //   .patch(`http://localhost:3000/todos/${id}`, { status: newStatus })
    //   .catch((err) => {
    //     alert("Failed to update status:", err);
    //   });
  };

  const hendlePriorityChange = (e, id) => {
    const newPriority = e.target.value;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, priority: newPriority } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <div className="mx-[60px] my-[20px] gap-8 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Welcome to the Todo-Apps</h1>
          <p>This is the main page of our application.</p>
        </div>
        <div className="flex flex-row gap-2">
          <Input
            Style="gap-0"
            Type="text"
            Placeholder="Enter your task"
            Name="text"
            styleField="w-[200px] text-[12px]"
            OnChange={(e) => setTask(e.target.value)}
          />
          <Button Style="w-auto text-[12px]" OnClick={() => submitHandler()}>
            Add Task
          </Button>
        </div>
        <div className="w-[70%] overflow-auto rounded-xl shadow-md">
          <table className="w-full">
            <thead className="bg-blue-50 border-b-2 border-blue-300">
              <tr>
                <th className="w-[10%] p-4 text-sm font-semibold tracking-wide text-left">
                  No.
                </th>
                <th className="w-[50%] p-4 text-sm font-semibold tracking-wide text-left">
                  Task
                </th>
                <th className="w-[20%] p-4 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="w-[20%] p-4 text-sm font-semibold tracking-wide text-left">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {todos.map((todos, index) => {
                let rowClass = todos.id % 2 === 1 ? "bg-white" : "bg-blue-50";
                return (
                  <tr key={todos.id} className={rowClass}>
                    <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                      {todos.task}
                    </td>
                    <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                      <select
                        data-index={todos.id}
                        onChange={(e) => handleStatusChange(e, todos.id)}
                        className={`status-dropdown p-1.5 rounded-lg font-bold tracking-wider uppercase
          ${
            todos.status.toLowerCase() === "complate"
              ? "bg-green-200 text-green-800"
              : todos.status.toLowerCase() === "pending"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-gray-200 text-gray-800"
          }`}
                        value={todos.status.toLowerCase()}
                      >
                        <option
                          className="text-gray-800 bg-white"
                          value="complate"
                        >
                          Complate
                        </option>
                        <option
                          className="text-gray-800 bg-white"
                          value="pending"
                        >
                          Pending
                        </option>
                      </select>
                    </td>
                    <td>
                      <select
                        data-index={todos.id}
                        onChange={(e) => hendlePriorityChange(e, todos.id)}
                        className={`status-dropdown p-1.5 rounded-md font-bold tracking-wider uppercase text-sm 
                          ${
                            todos.priority.toLowerCase() === "low"
                              ? "bg-green-200 text-green-800"
                              : todos.priority.toLowerCase() === "medium"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-red-200 text-red-800"
                          }
                          `}
                        value={todos.priority.toLowerCase()}
                      >
                        <option className="text-gray-800 bg-white" value="low">
                          Low
                        </option>
                        <option
                          className="text-gray-800 bg-white"
                          value="medium"
                        >
                          Medium
                        </option>
                        <option className="text-gray-800 bg-white" value="high">
                          High
                        </option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Homepage;
