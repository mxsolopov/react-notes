import "./ListItem.css";
import React from "react";

function ListItem({item, index, setEditIndex, showNote, deleteNote}) {

    return <li className="list-item">
        <div
            className="note-text"
            onClick={() => {
                setEditIndex(index);
                showNote(item.title, item.descr);
            }}>
            {item.title}
        </div>
        <button className="delete-btn" onClick={() => deleteNote(item.id)}>x</button>
    </li>
}

export default ListItem;