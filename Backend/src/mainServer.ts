import express from "express";
import dotenv from "dotenv";
import noteRouter from "./router/noteRouter";
import mongoose from "mongoose";
import userRouter from "./router/userRouter";
dotenv.config();
const app = express();

app.use(express.json());
mongoose
  .connect(process.env.DB_URL!)
  .then(() => console.log("connect successfully"))
  .catch((err) => console.error(err));

app.use("/api/v1", noteRouter);
app.use("/api/v1", userRouter);

app.listen(3333, () => {
  console.log("Hello world");
});
