import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.listen(4444, () => {
  console.log("auth running...");
});
