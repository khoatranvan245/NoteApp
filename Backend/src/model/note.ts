import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  createAt: Date,
  content: String,
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Note = mongoose.model("Note", noteSchema);
export default Note;
