import express from "express";
import dotenv from "dotenv";
import authRouter from "./router/authRouter";
import mongoose from "mongoose";

dotenv.config();
const app = express();
mongoose.connect(process.env.DB_URL!);
app.use(express.json());

app.use("/api/v1", authRouter);

app.listen(4444, () => {
  console.log("auth running...");
});
