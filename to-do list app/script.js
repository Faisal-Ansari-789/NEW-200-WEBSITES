function addTask() {
  let task = document.getElementById("task").value;
  let li = document.createElement("li");
  li.innerText = task;
  li.onclick = () => li.remove();
  document.getElementById("list").appendChild(li);
}