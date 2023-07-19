import React, { useState } from "react";
import AddNote from "./AddNote";
import Task from "./Task";
import "./styles.css";
function App() {
  const [notes, setNotes] = useState([]);

  const addItemHandler = (data) => {
    setNotes((prevValues) => {
      return [data, ...prevValues];
    });
  };

  console.log("all notes => ", notes);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddNote onAdd={addItemHandler} />
      <div>
        <ul>
          {notes.map((note) => {
            return <Task text={note} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
