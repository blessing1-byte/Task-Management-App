import e from "express";
import dotenv from "dotenv";

dotenv.config();
const app = e();

const PORT = process.env.PORT || 5000;
console.log(`app is running on ${PORT}`);
