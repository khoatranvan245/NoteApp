import { Request, Response } from "express";
import Note from "../model/note";
import mongoose from "mongoose";
const addNote = async (req: Request, res: Response): Promise<any> => {
  const { title, content } = req.body;
  const userId = req.userID;
  try {
    const note = await Note.create({
      title: title,
      content: content,
      createAt: Date.now(),
      author: new mongoose.mongo.ObjectId(userId),
    });
    return res.status(200).json(note);
  } catch (err) {
    return res.status(400).json(`error: ${err}`);
  }
};

const getNote = async (req: Request, res: Response): Promise<any> => {
  const userId = req.userID;
  const notes = await Note.find({ author: userId });

  return res.status(200).json({ notes });
};

export { addNote, getNote };
