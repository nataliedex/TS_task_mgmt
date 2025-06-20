import express from "express";
const router = express.Router();
import todoistTaskController from "../controllers/todoistTask.js";
router.get("/", todoistTaskController.getIndex);
export default router;
