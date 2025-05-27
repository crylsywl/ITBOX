let tasks = [
  {
    id: 1,
    task: "Task 1",
    status: "Complate",
  },
  {
    id: 2,
    task: "Task 2",
    status: "Pending",
  },
  {
    id: 3,
    task: "Task 3",
    status: "Pending",
  },
];

const getTask = () => {
  let task = document.querySelector("#task");
  task.innerHTML = ``;

  tasks.forEach((tasks, index) => {
    let rowClass = tasks.id % 2 === 1 ? "bg-white" : "bg-blue-50";

    task.innerHTML += `
  <tr class="${rowClass}">
    <td class="p-4 text-sm text-gray-700 whitespace-nowrap">${tasks.id}</td>
    <td class="p-4 text-sm text-gray-700 whitespace-nowrap">${tasks.task}</td>
    <td class="p-4 text-sm text-gray-700 whitespace-nowrap">
      <select 
        data-index="${index}"
        class="status-dropdown p-1.5 rounded-lg font-bold tracking-wider uppercase
          ${
            tasks.status.toLowerCase() === "complate"
              ? "bg-green-200 text-green-800"
              : tasks.status.toLowerCase() === "pending"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-gray-200 text-gray-800"
          }">
        <option class="text-gray-800 bg-white" value="complate" ${
          tasks.status.toLowerCase() === "complate" ? "selected" : ""
        }>Complate</option>
        <option class="text-gray-800 bg-white" value="pending" ${
          tasks.status.toLowerCase() === "pending" ? "selected" : ""
        }>Pending</option>
      </select>
    </td>
  </tr>
`;
  });

  // Tambahkan event listener setelah render
  document.querySelectorAll(".status-dropdown").forEach((select) => {
    select.addEventListener("change", (e) => {
      const index = e.target.getAttribute("data-index");
      tasks[index].status = e.target.value;
      getTask(); // re-render ulang
    });
  });
};

getTask();

const add = document.querySelector("#Add");
const addTask = () => {
  let input = document.querySelector("#newTask").value;
  if (input == "") {
    alert("Please input a task");
    return;
  }
  let addTask = {
    id: tasks.length + 1,
    task: input,
    status: "Pending",
  };
  tasks.push(addTask);
  getTask();
  document.querySelector("#newTask").value = "";
};

add.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
