import React from "react";
import NotesUpload from "../components/NotesUpload";
import NotesList from "../components/NotesList";

function Notes() {
  return (
    <div className="main-content">
      <NotesUpload />
      <NotesList />
    </div>
  );
}

export default Notes;
