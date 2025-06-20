const todoistTaskController = {
    getIndex: async (req, res) => {
        try {
            const response = await fetch("https://api.todoist.com/rest/v2/tasks", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`
                }
            });
            const todoistTasks = await response.json();
            res.json(todoistTasks);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error fetching tasks from the todoist");
        }
    },
};
export default todoistTaskController;
