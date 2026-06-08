import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import CreateNoteForm from "../components/NoteForm";
import { Link } from "react-router-dom";

const Home = () => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getAllNotes() {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_NOTES_API_BASE_URL}/api/notes`);
      setNotes(res.data.notes);
      setLoading(false);
    } catch (err) {
      console.log("Error in fetching the notes.", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_NOTES_API_BASE_URL}/api/notes/delete-note/${id}`,
      );
      let updatedNoteList = notes.filter((note) => note._id !== id);
      setNotes(updatedNoteList);
    } catch (err) {
      console.log("Error in deleting the node.", err);
    }
  };

  if (!notes) {
    return <div>No notes to display.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-6 mt-6">
        {/* Button */}
        <Link
          to={"/create-note"}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Create a new Note
        </Link>

        {/* Notes */}
        <div className="flex flex-col items-center gap-4 w-full">
          {notes &&
            notes.map((note) => (
              <NoteCard
                note={note}
                key={note._id}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
