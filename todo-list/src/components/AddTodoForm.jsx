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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}> {/* Agregar margen inferior */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe una nueva tarea"
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default AddTodoForm;
