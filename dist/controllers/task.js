import Task from "../models/Task";
const taskController = {
    getIndex: async (req, res) => {
        const tasks = await Task.find();
        res.render("index.ejs", { tasks });
    },
    createTask: async (req, res) => {
        await Task.create({ title: req.body.title });
        res.redirect("/");
    }
};
export default taskController;
