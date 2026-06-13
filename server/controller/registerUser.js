import mongoose from "mongoose";
import User from "../Schema/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import bcrypt from "bcrypt";

export const addUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  //destructure the json req sent and then add it to the already existing array of object using create
  const { name, email, password } = req.body;

  // generate salt
  const salt = await bcrypt.genSalt(10);
  // hash the password
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });
  //later do a logic to check the db if email exist
  return res.status(201).json(user);
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json(user);
});
