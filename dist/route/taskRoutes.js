import express from "express";
const router = express.Router();
import taskController from "../controllers/task.js";
router.get("/", taskController.getIndex);
export default router;
