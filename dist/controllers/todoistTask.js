import fetch from "node-fetch";
const todoistTaskController = {
    getIndex: async (req, res) => {
        try {
            const [activeRes, completeRes] = await Promise.all([
                fetch("https://api.todoist.com/rest/v2/tasks", {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}` }
                }),
                fetch("https://api.todoist.com/sync/v9/completed/get_all", {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}` }
                }),
            ]);
            const todoistTasks = await activeRes.json();
            const completedTasks = await completeRes.json();
            // console.log(completedTasks);
            res.render("todoist.ejs", { todoistTasks, completedTasks });
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error fetching tasks from the todoist");
        }
    },
    addBack: async (req, res) => {
        const { content, id: taskID } = req.body;
        try {
            const [addResponse, delResponse] = await Promise.all([
                fetch("https://api.todoist.com/rest/v2/tasks", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ content })
                }),
                fetch(`https://api.todoist.com/rest/v2/tasks/${taskID}`, {
                    method: "DELETE",
                    headers: { "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}` }
                }),
            ]);
            res.redirect("/todoist");
            // const response = await fetch("https://api.todoist.com/rest/v2/tasks", {
            //     method: "POST", 
            //     headers: {
            //         "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`,
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ content })
            // });
            // res.redirect("/todoist");
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error adding a task to the todoist");
        }
    },
    addTask: async (req, res) => {
        try {
            const response = await fetch("https://api.todoist.com/rest/v2/tasks", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: req.body.content
                })
            });
            res.redirect("/todoist");
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error adding a task to the todoist");
        }
    },
    completeTask: async (req, res) => {
        try {
            const taskID = req.params.id;
            const response = await fetch(`https://api.todoist.com/rest/v2/tasks/${taskID}/close`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to complete task: ${response.statusText}`);
            }
            res.redirect("/todoist");
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error completing a task on the todoist");
        }
    },
    deleteTask: async (req, res) => {
        try {
            const taskID = req.params.id;
            const response = await fetch(`https://api.todoist.com/rest/v2/tasks/${taskID}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}` }
            });
            res.redirect("/todoist");
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error deleting a task on the todoist");
        }
    }
};
export default todoistTaskController;
