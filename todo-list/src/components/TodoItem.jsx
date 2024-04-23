import React from 'react';
import Button from './Button';

const TodoItem = ({ task, onComplete, onDelete }) => {
  return (
    <div className="col-2"> {/* Cambié col-6 por col-4 para que los elementos ocupen un tercio del ancho */}
      <div className="bg-warning shadow-md rounded-lg p-2 flex justify-between items-center mb-1">
        <p className={`${task.completed ? "task-completed" : ""} text-gray-800`}>{task.description}</p>
        <div>
          <Button onClick={() => onComplete(task.id)} className="btn-success" label="Complete" />
          <Button onClick={() => onDelete(task.id)} className="btn-danger" label="Delete" />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
