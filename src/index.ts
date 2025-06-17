import { Task, createTask } from "./task";

const tasks: Task[] = [];

function addTask(title: string): void {
    const task = createTask(title);
    tasks.push(task);
}

function listTasks(): void {
    console.log("Tasks:");
    tasks.forEach(task => {
        console.log(`${task.id}: ${task.title} [${task.completed ? "Done" : "Pending"}]`);
    });
}

function completeTask(id: number): void {
    const task = tasks.find(task => task.id === id);
    if(task) {
        task.completed = true;
    }
}

addTask("Learn TypeScript");
addTask("Build a Project");
listTasks();

completeTask(1);
console.log("\nAfter completing task 1: ");
listTasks();