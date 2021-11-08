import './App.css'; 
import React, { useState } from "react";
import Form from "./Form";
import NotesList from "./NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  
  const [titleValue, setTitleValue] = useState("");
  const [descrValue, setDescrValue] = useState("");

  function addNote(title, descr) {
    if (title !== "" && descr !== "") {
      setNotes([...notes, { id: Date.now(), title: title, descr: descr }]);
    }
  }

  function updateNote(title, descr, index) {
    setNotes([...notes.slice(0, index), { id: Date.now(), title: title, descr: descr }, ...notes.slice(index + 1)]);
    setEditIndex(null);
  }

  function showNote(title, descr) {
    setTitleValue(title);
    setDescrValue(descr);
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return <>
    <h1 className="title">Блокнот записей</h1>
    <div className="wrapper">
      <div className="notes">
        <NotesList notes={notes} showNote={showNote} deleteNote={deleteNote} setEditIndex={setEditIndex}/>
      </div>
      <div className="fields">
        <Form titleValue={titleValue}
                  setTitleValue={setTitleValue}
                  descrValue={descrValue}
                  setDescrValue={setDescrValue}
                  addNote={addNote}
                  updateNote={updateNote}
                  editIndex={editIndex} />
      </div>
    </div>
  </>;
}

export default App;