import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import "./NotesViewer.css";

function NotesViewer({ note }) {
  const [studentNotes, setStudentNotes] = useState(note.studentNotes || "");
  const [message, setMessage] = useState("");

  const handleSaveNotes = async () => {
    const response = await fetch(
      `http://localhost:5432/api/notes/add-notes/${note.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ studentNotes }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setMessage("Notes saved successfully!");
    } else {
      setMessage("Failed to save notes.");
    }
  };

  return (
    <Container className="note-viewer">
      <h3 className="mb-3">{note.title}</h3>
      <iframe
        src={note.fileUrl}
        title={note.title}
        className="file-preview mb-4"
      ></iframe>
      <Form.Group className="mb-3">
        <Form.Label>Your Notes:</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Add personal notes here..."
          value={studentNotes}
          onChange={(e) => setStudentNotes(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" onClick={handleSaveNotes}>
        Save Notes
      </Button>
      {message && <Alert className="mt-3">{message}</Alert>}
    </Container>
  );
}

export default NotesViewer;
