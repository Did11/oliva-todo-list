import React, { useState } from 'react';
import Button from './Button';

const TodoItem = ({ task, onComplete, onDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onComplete(task.id);
  };

  return (
    <div className={`shadow-md rounded-lg mb-1 ${completed ? 'task-completed' : 'task'}`}>
      <div className="p-2">
        <p className="task-content">{task.description}</p> {/* Añade la clase task-content acá */}
        <div className="d-flex justify-content-center">
          <Button onClick={handleComplete} className="btn-success me-1" label={completed ? "Reactivar" : "Completar"} />
          <Button onClick={() => onDelete(task.id)} className="btn-danger" label="Eliminar" />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
