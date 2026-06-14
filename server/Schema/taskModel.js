import mongoose from "mongoose";
import User from "./userModel.js";

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      required: true,
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      required: true,
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true },
);

const taskModel = mongoose.model("task", taskSchema);
export default taskModel;

/*
what does .Types mean

Types is just a property on mongoose.Schema that gives you access to all the special data types Mongoose supports beyond the basic JavaScript ones.

So mongoose.Schema.Types is like a collection of Mongoose-specific types such as:

ObjectId — for storing MongoDB document IDs
Mixed — for storing any type of data
Decimal128 — for high precision decimals
Map — for storing key-value pairs
*/
