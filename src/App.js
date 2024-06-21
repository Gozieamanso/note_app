import React, { useState } from 'react'
import NoteForm from '../src/components/NoteForm.jsx';
// import NoteList from '../src/components/NoteList.jsx';
import './css/Note.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    note.id = Date.now();
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <h1>Note Taking App</h1>
      <NoteForm addNote={addNote} />
    </div>
  );
}

export default App