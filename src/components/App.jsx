import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

export default function App() {
  const [notes, addOrDeleteNote] = useState([]);

  function addNote(newNote) {
    addOrDeleteNote((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    addOrDeleteNote((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}
