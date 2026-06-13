import e from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
const app = e();

const PORT = process.env.PORT || 5000;
console.log(`app is running on ${PORT}`);

connectDB();

app.use(e.json()); //without this req.body will be undefined. always come before your route
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/api/user", userRoutes);

app.listen(PORT);
