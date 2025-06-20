import Task from "../models/Task.js";
const taskController = {
    getIndex: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.render("index.ejs", { tasks });
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error loading the tasks");
        }
    },
    addTask: async (req, res) => {
        try {
            await Task.create({ title: req.body.title, completed: false });
            res.redirect("/");
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error adding a task");
        }
    },
    completeTask: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            if (task) {
                task.completed = !task.completed;
                await task.save();
            }
            res.redirect("/");
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error completing task");
        }
    },
    deleteTask: async (req, res) => {
        try {
            await Task.findByIdAndDelete(req.params.id);
            res.redirect("/");
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Error deleting task");
        }
    },
};
export default taskController;
