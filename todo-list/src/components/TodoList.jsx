import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'; // Asegúrate que la importación es correcta

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simular la carga de tareas
    const fetchedTasks = [
      { id: 1, description: 'Learn React', completed: false },
      { id: 2, description: 'Write Todo List App', completed: false }
    ];
    setTasks(fetchedTasks);
  }, []);

  const handleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="bg-primary">
      <div>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
