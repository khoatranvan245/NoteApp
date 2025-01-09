import express from "express";
import { addNote, getNote } from "../controller/noteController";
import verifyToken from "../middleware/verifyToken";
const router = express.Router();

router.post("/notes", verifyToken, addNote);
router.get("/notes", verifyToken, getNote);

export default router;
