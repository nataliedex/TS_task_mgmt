import express from "express";
const router = express.Router();
import task from "../controllers/task.js";

router.get("/", task.getIndex);

export default router;

