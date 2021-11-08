import "./NotesList.css";
import React, { useState } from "react";
import ListItem from "./ListItem";

function NotesList({ notes, showNote, deleteNote, setEditIndex }) {

  const [filteredValue, setFilteredValue] = useState("");

  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filteredValue.toLowerCase());
  })

  let list, search;
  if (notes.length > 0) {
    list = filteredNotes.map((note, index) => (
      <ListItem item={note} index={index} setEditIndex={setEditIndex} showNote={showNote} deleteNote={deleteNote} />
    ));
    search = <input
              className="search"
              type="search"
              placeholder="Поиск"
              value={filteredValue}
              onChange={(event) => setFilteredValue(event.target.value)} 
              />
  } else {
    list = "Пока нет записей";
    search = "";
  }

  return <>
    <div>{search}</div>
    <ul className="list">{list}</ul>
  </>;
}

export default NotesList;