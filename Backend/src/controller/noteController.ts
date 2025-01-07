import { Request, Response } from "express";
import Note from "../model/note";
const addNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const note = await Note.create({
      title: title,
      content: content,
      createAt: Date.now(),
    });
    res.status(200).json(note);
  } catch (err) {
    throw new Error(`error: ${err}`);
  }
};

export { addNote };
