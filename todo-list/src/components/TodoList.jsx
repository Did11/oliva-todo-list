import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';


const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, description: 'Lavar el auto', completed: false },
          { id: 2, description: 'Cortar el pasto', completed: true },
          { id: 3, description: 'Comprar regalo barato para la suegra', completed: false },
          { id: 4, description: 'Cambiar la bombilla de la heladera', completed: false } 
        ];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleAddTask = (description) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      description: description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todo-list-container bg-primary">
      <AddTodoForm onAddTask={handleAddTask} />
      <div className="todo-items-container">
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
