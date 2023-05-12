import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  console.log("🚀 ~ file: App.js:9 ~ App ~ selectedNote:", selectedNote)
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const addNote = (note) => {
    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotes([...notes, data]);
      });
  };

  const updateNote = (updatedNote) => {
    fetch(`http://localhost:8000/notes/${updatedNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNote),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedNotes = notes.map((note) =>
          note.id === data.id ? data : note
        );
        setNotes(updatedNotes);
        setSelectedNote(null);
      });
  };

  const deleteNote = (noteId) => {
    fetch(`http://localhost:8000/notes/${noteId}`, {
      method: "DELETE",
    }).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
      setSelectedNote(null);
    });
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="app bg-gray-100 min-h-screen">
      <div className="main ">
        {selectedNote ? (
          <Note
            note={selectedNote}
            onUpdateNote={updateNote}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setSelectedNote= {setSelectedNote}
          />
        ) : (
          <NoteForm onSubmit={addNote} />
        )}
      </div>
      <div className="sidebar">
        <NoteList
          notes={notes}
          onNoteClick={handleNoteClick}
          onDeleteNote={deleteNote}
          setIsEditing={setIsEditing}
        />
      </div>
    </div>
  );
};

export default App;
