import express from "express";
const router = express.Router();
import taskController from "../controllers/task.js";

router.get("/", taskController.getIndex);
router.post("/addTask", taskController.addTask);
router.post("/completeTask/:id", taskController.completeTask);
router.post("/deleteTask/:id", taskController.deleteTask);

export default router;

