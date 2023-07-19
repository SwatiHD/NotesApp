import { useState } from "react";

const AddNote = ({ onAdd }) => {
  // state for onchange data
  const [note, setNote] = useState("");

  const changeHandler = (e) => {
    const noteInput = e.target.value;
    setNote(noteInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(note);
  };

  // console.log(typeof onAdd);

  console.log("note text = > ", note);

  return (
    <form onSubmit={submitHandler} className="form">
      <input onChange={changeHandler} type="text" />
      <button>
        <span>Add</span>
      </button>
    </form>
  );
};

export default AddNote;
