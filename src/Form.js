import './Form.css';
import React from "react";

function Form({titleValue, setTitleValue, descrValue, setDescrValue, addNote, updateNote, editIndex}) {

  return (
    <div className="fields-wrapper">

      <input
        className="title-input"
        value={titleValue}
        placeholder="Название"
        onChange={(event) => setTitleValue(event.target.value)}
      />

      <textarea
        className="descr-input"
        value={descrValue}
        placeholder="Текст записи"
        onChange={(event) => setDescrValue(event.target.value)}
        rows="8"
      />
      
      <button
        className="button"
        onClick={() => {
          if (editIndex === null) {
            addNote(titleValue, descrValue);
          } else {
              updateNote(titleValue, descrValue, editIndex);
          }
          setTitleValue("");
          setDescrValue("");
        }}
      >
        {editIndex === null ? "Добавить" : "Сохранить"}
      </button>
    </div>
  );
}

export default Form;