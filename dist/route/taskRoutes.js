import express from "express";
const router = express.Router();
import taskController from "../controllers/task.js";
router.get("/", taskController.getIndex);
router.post("/", taskController.createTask);
export default router;
