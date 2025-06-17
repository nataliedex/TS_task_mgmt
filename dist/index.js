import { createTask } from "./task.js";
const tasks = [];
function addTask(title) {
    const task = createTask(title);
    tasks.push(task);
}
function listTasks() {
    console.log("Tasks:");
    tasks.forEach(task => {
        console.log(`${task.id}: ${task.title} [${task.completed ? "Done" : "Pending"}]`);
    });
}
function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
    }
}
addTask("Learn TypeScript");
addTask("Build a Project");
listTasks();
completeTask(1);
console.log("\nAfter completing task 1: ");
listTasks();
