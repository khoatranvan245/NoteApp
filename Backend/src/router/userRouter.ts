import express from "express";
import { signUp } from "../controller/userController";

const router = express.Router();

router.post("/register", signUp);

export default router;
