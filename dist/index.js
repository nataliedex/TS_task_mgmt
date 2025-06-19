import { createTask } from "./task.js";
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const tasks = [];
function addTask(title) {
    const task = createTask(title);
    tasks.push(task);
    renderTasks();
}
function renderTasks() {
    list.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title.toUpperCase()} status: ${task.completed ? "Complete" : "Pending"}`;
        li.id = "todo-item";
        li.addEventListener("click", () => {
            console.log(`am clicking ${task.id}`);
            completeTask(task.id);
            renderTasks();
        });
        list.appendChild(li);
    });
}
function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = task.completed ? false : true;
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = input.value.trim();
    if (taskTitle) {
        addTask(taskTitle);
        input.value = "";
    }
});
