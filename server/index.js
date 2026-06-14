import e from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

import cors from "cors";

dotenv.config();
const app = e();

const PORT = process.env.PORT || 5000;
console.log(`app is running on ${PORT}`);

connectDB();

app.use(e.json()); //without this req.body will be undefined. always come before your route

//logger middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
}); /*logger middleware
It helps you debug your app during development. It lets you see:

Which routes are being hit
What HTTP method is being used
If a request is actually reaching your server or not*/

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.listen(PORT);
