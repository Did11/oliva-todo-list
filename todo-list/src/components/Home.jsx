import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#f0e4d7";
    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="display-1 text-primary">Bienvenido a Mi To-Do List</h1>
      <p>Esperamos que disfrutes utilizando esta aplicación. Es sencilla pero eficaz para mantener todas tus tareas organizadas.</p>
      <p>Con Mi To-Do List, puedes:</p>
      <ul>
        <li>Añadir nuevas tareas que necesitas recordar.</li>
        <li>Marcar las tareas como completadas una vez que las hayas finalizado.</li>
        <li>Eliminar tareas que ya no son relevantes.</li>
      </ul>
      <p>¡Comenzá ahora añadiendo tu primera tarea y recobrá el control de tu vid.. digo, de tus tareas pendientes!</p>
    </div>
  );
}

export default Home;
