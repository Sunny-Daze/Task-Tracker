import React from "react";
import { useState } from "react";

function AddTask({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert(
        "⚠️Title or Description cannot be blank!⚠️ \n ⚠️Add both to proceed further⚠️"
      );
    } else {
      onSubmit(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h2 style={{ textAlign: "center" }}>Add your Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group my-3">
          <span className="input-group-text">
            ADD THE TITLE OF THE TASK&nbsp;🖊️
          </span>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">
            DESCRIPTION OF THE TASK &nbsp;&nbsp;📝
          </span>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 my-3">
          <button className="btn btn-success my-2" type="submit">
            📩 ADD NEW TASK 📩
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
