import express from "express";
import { login, refreshToken } from "../controller/authController";

const router = express.Router();

router.post("/login", login);
router.get("/refresh", refreshToken);

export default router;
