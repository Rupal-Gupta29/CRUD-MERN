import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note, handleDelete }) => {

  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>
      <p className="text-gray-600 mt-2 text-sm">{note.description}</p>
      <div className="flex gap-3 mt-4">
        <Link to={"/edit-note"} state={note}
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Edit
        </Link>
        <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        onClick={()=>handleDelete(note._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
