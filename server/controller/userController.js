import mongoose from "mongoose";
import User from "../Schema/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret_key = process.env.SECRET_KEY;
// generate salt
const salt = bcrypt.genSaltSync(10);

export const registerUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  //destructure the json req sent and then add it to the already existing array of object using create
  const { name, email, password } = req.body;
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    res.status(401).json({ message: "user already exists" });
    return;
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  //later do a logic to check the db if email exist
  return res.status(201).json(user);
});

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const existingEmail = await User.findOne({ email });
  if (!existingEmail) {
    res.status(500).json({ message: "invalid email or password" });
    return;
  }
  //after passing email validation, compare password
  // compare plain password with that from the found email
  const comparePassword = await bcrypt.compare(
    password,
    existingEmail.password,
  );
  if (!comparePassword) {
    res.status(500).json({ message: "invalid email or password" });
    return;
  }

  //attach a signature to found user  //payload, secret key, expiry time
  const token = jwt.sign(
    { userId: existingEmail._id, userEmail: email },
    secret_key,
    {
      expiresIn: "1h",
    },
  );
  res.status(200).json({ user: token, message: "login Successfully" });
});
/*  WORK FLOW -> :
Find email → not found? return error
Compare password → wrong? return error
Generate token
Send success response
*/

/*
 authenticate -> display profile details
*/

export const getUserProfile = asyncHandler(async (req, res, next) => {
  //get the user
  // userId is coming from the token

  const user = await User.findById(req.user.userId);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json(user);
});
