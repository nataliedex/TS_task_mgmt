import {  Request, Response } from "express";


const todoistTaskController = {
    getIndex: async(req: Request, res: Response) => {
        try {
            const response = await fetch("https://api.todoist.com/rest/v2/tasks", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`
                }
            });
            const todoistTasks = await response.json();
            res.render("todoist.ejs", { todoistTasks });
        } catch(err) {
            console.error(err);
            res.status(500).send("Error fetching tasks from the todoist");
        }
        
    },

    addTask: async(req: Request, res: Response) => {
        try {
            const response = await fetch("https://api.todoist.com/rest/v2/tasks", {
                method: "POST", 
                headers: {
                    "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`
                },
                body: JSON.stringify({
                    content: req.body.content
                })
            });
            res.redirect("/todoist");

        } catch(err) {
            console.error(err);
            res.status(500).send("Error adding a task to the todoist");
        }
    },

    completeTask: async(req: Request, res: Response) => {
        try {
            const taskID = req.params.id;
            const response = await fetch(`https://api.todoist.com/rest/v2/tasks/${taskID}/close`, {
                method: "POST",
                headers: { "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`}
            });
            res.redirect("/todoist");

        } catch(err) {
            console.error(err);
            res.status(500).send("Error completing a task on the todoist");
        }
    },

    deleteTask: async(req: Request, res: Response) => {
        try {
            const taskID = req.params.id;
            const response = await fetch(`https://api.todoist.com/rest/v2/tasks/${taskID}`, {
                method: "DELETE",
                headers: { "Authorization": `Bears ${process.env.TODOIST_API_TOKEN}`}
            });
            res.redirect("/todoist");

        } catch(err) {
            console.error(err);
            res.status(500).send("Error deleting a task on the todoist");
        }
    }

};

export default todoistTaskController;