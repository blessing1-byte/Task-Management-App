import mongoose from "mongoose";
import tasksModel from "./../Schema/taskModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const createTask = asyncHandler(async (req, res, next) => {
  const user = req.user.userId;
  const { title, description, status, priority, dueDate } = req.body;
  if (!user) {
    res.status(401).json({ message: "unauthorized access" });
    return;
  }
  const userTask = await tasksModel.create({
    user,
    title,
    description,
    status,
    priority,
    dueDate,
  });
  res.status(200).json({ message: "Task Created successfully" });
});

export const getUserTasks = asyncHandler(async (req, res, next) => {
  const user = req.user.userId;
  if (!user) {
    res.status(401).json({ message: "unauthorized access" });
    return;
  }
  const tasks = await tasksModel.find({ user });
  if (tasks.length == 0) {
    //using .length to check if the array of objects of task is empty
    res.status(500).json({ message: "bad request" });
    return;
  }
  res.status(200).json({ tasks });
});
/* NOTE
why cant we say!task

You can say !tasks for a single task like in getTaskById where findById returns null if not found — so !task works there.

But for getUserTasks you're using find() which never returns null — it always returns an array, even if empty. So !tasks would always be false even when there are no tasks, because an empty array [] is truthy in JavaScript.

That's why you check tasks.length == 0 instead — to check if the array is empty.
*/
