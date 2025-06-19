import {  Request, Response } from "express";

const task = {
    getIndex: async(req: Request, res: Response) => {
        res.render("index.ejs");
    }
};

export default task;