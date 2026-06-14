import e from "express";
import { createTask, getUserTasks } from "../controller/taskController.js";
import authHandler from "../middleware/authHandler.js";
const router = e.Router();

router.route("/create-task").post(authHandler, createTask);
router.route("/get-userTask").get(authHandler, getUserTasks);

export default router;
