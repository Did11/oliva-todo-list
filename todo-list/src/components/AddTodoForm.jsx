import React, { useState } from 'react';

const AddTodoForm = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;  // Prevenir la adición de tareas vacías
    onAddTask(input);
    setInput('');  // Limpiar el campo después de añadir
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodoForm;
