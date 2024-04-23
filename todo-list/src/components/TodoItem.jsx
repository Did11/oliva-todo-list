import React from 'react';

const TodoItem = ({ task, onComplete, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-2">
      <p className={`${task.completed ? "line-through" : ""} text-gray-800`}>{task.description}</p>
      <div>
        <button onClick={() => onComplete(task.id)} className="btn btn-success mr-2">Complete</button>
        <button onClick={() => onDelete(task.id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;