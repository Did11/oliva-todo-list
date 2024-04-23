import React, { useState, useEffect } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Aquí podrías cargar las tareas desde un API o localmente
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
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
