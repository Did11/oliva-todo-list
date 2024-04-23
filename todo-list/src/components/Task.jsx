import React from 'react';

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className="task">
      <p>{task.description}</p>
      <button onClick={() => onComplete(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
