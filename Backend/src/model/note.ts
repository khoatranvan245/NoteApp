import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  createAt: Date,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);
export default Note;
