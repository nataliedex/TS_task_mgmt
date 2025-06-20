
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = input.value.trim();

    if(title) {
        await fetch("/addTask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
        });

        input.value = "";
        loadTasks();
    }
});

async function loadTasks() {
    const response = await fetch("/tasks");
    const tasks = await response.json();

    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} status: ${task.completed ? "Complete" : "Pending"}`;
    
        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.addEventListener("click", async () => {
            await fetch(`/completeTask/${task._id}`, { method: "PUT" });
            loadTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", async () => {
            await fetch(`/deleteTask/${task._id}`, { method: "DELETE" });
            loadTasks();
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });

}

loadTasks();


