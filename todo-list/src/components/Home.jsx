import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Cambia el color de fondo cuando el componente se monta
    document.body.style.backgroundColor = "#f0e4d7"; // Usa el color que prefieras

    // Revierte el color de fondo cuando el componente se desmonta
    return () => {
      document.body.style.backgroundColor = ""; // Quita el color o establece uno por defecto
    };
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="display-1 text-primary">Bienvenido a la Aplicación!</h1>
      <p className="text-success">Este es un mensaje de inicio utilizando Bootstrap.</p>
    </div>
  );
}

export default Home;
