let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const text = taskInput.value;
  const priority = document.getElementById("priority").value;
  if (!text) return;

  tasks.push({ text, priority });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  const filter = document.getElementById("filter").value;
  taskList.innerHTML = "";

  tasks.filter(t => filter === "All" || t.priority === filter)
       .forEach((task, i) => {
         const li = document.createElement("li");
         li.className = task.priority;
         li.innerHTML = `${task.text} <button onclick="remove(${i})">X</button>`;
         taskList.appendChild(li);
       });
}

function remove(i) {
  tasks.splice(i,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();