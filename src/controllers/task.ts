import {  Request, Response } from "express";
import Task from "../models/Task";



const taskController = {
    getIndex: async(req: Request, res: Response) => {
        const tasks = await Task.find();
        res.render("index.ejs", { tasks });
    },
    createTask: async(req: Request, res: Response) => {
        await Task.create({ title: req.body.title });
        res.redirect("/");
    }

};

export default taskController;