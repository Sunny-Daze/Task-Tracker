import React from 'react'

function TaskComponent({ Task, HandleDelete }) {
    return (
      <>
        <h4>{Task.task}</h4>
        <p>{Task.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            HandleDelete(Task);
          }}
        >
          Delete 🗑️
        </button>
      </>
    );
}

export default TaskComponent
