import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();

mongoose.connect(process.env.DB_URL!);

app.listen(3333, () => {
  console.log("Hello world");
});
