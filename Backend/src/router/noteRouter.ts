import express from "express";
import { addNote } from "../controller/noteController";
const router = express.Router();

router.post("/notes", addNote);

export default router;
