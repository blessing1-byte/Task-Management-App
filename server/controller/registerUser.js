import mongoose from "mongoose";
import User from "../Schema/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const addUser = asyncHandler(async (req, res) => {
  //destructure the json req sent and then add it to the already existing array of object using create
  const { name, email, password } = req.body;

  const user = res.json(User.create({ name, email, password }));
  //later do a logic to check the db if email exist
  return res.status(201).json(user);
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json(user);
});
