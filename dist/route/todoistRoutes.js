import express from "express";
const router = express.Router();
import todoistTaskController from "../controllers/todoistTask.js";
router.get("/", todoistTaskController.getIndex);
router.post("/addTask", todoistTaskController.addTask);
router.post("/completeTask/:id", todoistTaskController.completeTask);
router.post("/deleteTask/:id", todoistTaskController.deleteTask);
router.post("/addBack", todoistTaskController.addBack);
export default router;
