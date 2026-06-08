import React from "react";
import NoteForm from "../components/NoteForm";
import { useLocation } from "react-router-dom";


const EditNote = () => {
    const {state:note} = useLocation();
  return (
    <div>
      <NoteForm note={note}/>
    </div>
  );
};

export default EditNote;
