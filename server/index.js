import e from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = e();

const PORT = process.env.PORT || 5000;
console.log(`app is running on ${PORT}`);

connectDB();

app.use(e.json()); //without this req.body will be undefined.
app.use("/api/user", userRoutes);
app.listen(PORT);
