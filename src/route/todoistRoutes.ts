import express from "express";
const router = express.Router();
import todoistTaskController from "../controllers/todoistTask.js";


router.get("/", todoistTaskController.getIndex);
router.post("/addTask", todoistTaskController.addTask);
router.post("/completeTask/:id", todoistTaskController.completeTask);
router.post("/deleteTask/:id", todoistTaskController.deleteTask);


// router.post("/completeTask/:id", (req, res) => {
//     console.log("Route hit! ID:", req.params.id);
//     res.send("Route working!");
// });

export default router;