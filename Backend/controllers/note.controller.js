const NoteModel = require("../models/note.model");

async function createNote(req, res) {
  try {
    const data = req.body;
    const createdNote = await NoteModel.create(data);
    res.status(201).send({
      message: "Note created successfully.",
      note: createdNote,
    });
  } catch (err) {
    res.status(500).send({
      message: "Something went wrong while creating note.",
      error: err.message,
    });
  }
}

async function fetchNotes(req, res) {
  try {
    const notes = await NoteModel.find();
    res.status(200).send({
      message: "Notes fetched successfully.",
      notes,
    });
  } catch (err) {
    res.status(500).send({
      message: "Something went wrong while fetching the notes.",
      error: err.message,
    });
  }
}

async function editNote(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const note = await NoteModel.findById(id);
    note.title = data.title;
    note.description = data.description;
    const updatedNote = await note.save();
    res.status(200).send({
      message: "Note updated successfully.",
      note: updatedNote,
    });
  } catch (err) {
    res.status(500).send({
      message: "Something went wrong while updating the note.",
      error: err.message,
    });
  }
}

async function deleteNote(req, res) {
  try {
    const id = req.params.id;
    const result = await NoteModel.findOneAndDelete({
      _id: id,
    });
    res.status(200).send({
      message: "Note deleted successfully.",
    });
  } catch (err) {
    res.status(500).send({
      message: "Something went wrong while deleting the note.",
      error: err.message,
    });
  }
}

module.exports = { fetchNotes, createNote, deleteNote, editNote };
