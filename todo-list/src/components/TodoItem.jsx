import React, { useState } from 'react';
import Button from './Button';

const TodoItem = ({ task, onComplete, onDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onComplete(task.id);
  };

  // Asegúrate de que las clases se aplican al div más externo
  return (
    <div className={`col-2 shadow-md rounded-lg mb-1 ${completed ? 'task-completed' : 'task'}`} style={{ backgroundColor: completed ? '#6EE7B7' : '#ADD8E6' }}>
      <div className="p-2 flex justify-between items-center">
        <p className="text-gray-800">{task.description}</p>
        <div>
          <Button onClick={handleComplete} className="btn-success" label={completed ? "Completado" : "Completar"} />
          <Button onClick={() => onDelete(task.id)} className="btn-danger" label="Delete" />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
