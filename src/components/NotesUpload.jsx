import React, { useState } from "react";

function NotesUpload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const response = await fetch("http://localhost:5432/api/notes/upload", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("File uploaded successfully!");
    } else {
      setMessage("Failed to upload file.");
    }
  };

  return (
    <div className="main-content">
      <h2>Upload Class Notes</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>File:</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
}

export default NotesUpload;
