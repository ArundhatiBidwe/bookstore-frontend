import React, { useState, useEffect } from "react";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("http://localhost:5432/api/notes", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  return (
    <div className="main-content">
      <h2>Available Class Notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>Uploaded by: {note.uploadedBy}</p>
          <a href={note.fileUrl} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
