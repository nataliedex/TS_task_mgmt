import { Task, createTask } from "./task.js";

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;


let tasks: Task[] = [];
let currentlyEditingId: number | null = null;

function addTask(title: string): void {
    const task = createTask(title);
    tasks.push(task);
    renderTasks();
}

function renderTasks(): void {
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} status: ${task.completed ? "Complete" : "Pending"}`;

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo Completion": "Complete";
        completeButton.classList.add("todo-item");

        completeButton.addEventListener("click", () => {
            completeTask(task.id);
            renderTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("todo-item");

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
            renderTasks();
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("todo-item");

        editButton.addEventListener("click", () => {
            editTask(task.id, li);
        });



        list.appendChild(li);
        list.appendChild(completeButton);
        list.appendChild(deleteButton);
        list.appendChild(editButton);
    });
}

function editTask(id: number, li: HTMLLIElement): void {
    if(currentlyEditingId !== null && currentlyEditingId !== id){
        return;
    }
    currentlyEditingId = id;
    li.innerHTML = "";

    const textField = document.createElement("input");
    textField.type = "text";
    textField.value = tasks.find(task => task.id === id)?.title || "";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Save";

    submitButton.addEventListener("click", () => {
        const task = tasks.find(task => task.id === id);
        if(task){
            task.title = textField.value;
        }
        currentlyEditingId = null;
        renderTasks();
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    cancelButton.addEventListener("click", () => {
        currentlyEditingId = null;
        renderTasks();
    });
    
    list.appendChild(textField);
    list.appendChild(submitButton);
    list.appendChild(cancelButton);
}

function deleteTask(id: number): void {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with idea ${id} removed`);
    renderTasks();
}

function completeTask(id: number): void {
    const task = tasks.find(task => task.id === id);
    if(task) {
        task.completed = task.completed ? false : true;
        
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = input.value.trim();
    if(taskTitle){
        addTask(taskTitle);
        input.value = "";
    }
});
