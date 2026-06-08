const express = require("express");
const router = express.Router();
const {
  fetchNotes,
  createNote,
  deleteNote,
  editNote,
} = require("../controllers/note.controller");

router.get("/", fetchNotes);

router.post("/create-note", createNote);

router.delete("/delete-note/:id", deleteNote);

router.put("/edit-note/:id", editNote);

module.exports = router;
