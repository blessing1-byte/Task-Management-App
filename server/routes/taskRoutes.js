import e from "express";
import {
  createTask,
  getTaskById,
  getUserTasks,
} from "../controller/taskController.js";
import authHandler from "../middleware/authHandler.js";
const router = e.Router();

router.route("/create-task").post(authHandler, createTask);
router.route("/get-userTask").get(authHandler, getUserTasks);
router.route("/get-userTask/:_id").get(authHandler, getTaskById);

export default router;

/*
{
  "title":"start up task management app",
  "description": "start",
  "priority": "low",
  "dueDate": "2028-01-01"
}

*/
