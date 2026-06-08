import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NoteForm = ({ note }) => {
  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.description || "");
  const navigate = useNavigate();

  const handleAddNote = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_NOTES_API_BASE_URL}/create-note`,
        {
          title,
          description,
        },
      );
      setTitle("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.log("Error in creating a new note.", err);
    }
  };

  const handleEditNote = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_NOTES_API_BASE_URL}/edit-note/${note._id}`,
        {
          title,
          description,
        },
      );
      setTitle("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.log("Error in updating the note.", err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {note ? "Edit Note" : "Add New Note"}
      </h2>

      <form
        onSubmit={note ? handleEditNote : handleAddNote}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          {note ? "Save changes" : "Add Note"}
        </button>

        <Link
          to={"/"}
          className="border border-yellow-500 text-yellow-500 py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white transition flex items-center justify-center"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default NoteForm;
