import express from "express";
const router = express.Router();
import taskController from "../controllers/task.js";

router.get("/", taskController.getIndex);
router.post("/addTask", taskController.addTask);
router.put("/completeTask/:id", taskController.completeTask);
router.delete("/deleteTask/:id", taskController.deleteTask);

export default router;

