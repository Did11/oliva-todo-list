import React from 'react';

const About = () => (
  <div className="about-container">
    <h1>Acerca de</h1>
    <p>
      ¡Bienvenido a la aplicación de lista de tareas! Esta aplicación ha sido desarrollada con el objetivo de ofrecerte una forma sencilla y eficiente de gestionar tus tareas diarias.
    </p>
    <h2>Ventajas de la Aplicación</h2>
    <ul>
      <li><strong>SPA (Single Page Application):</strong> La aplicación utiliza el concepto de SPA, lo que significa que una vez que cargues la página inicial, todas las interacciones posteriores se realizan sin necesidad de recargar la página completa. Esto proporciona una experiencia de usuario más fluida y rápida.</li>
      <li><strong>LocalStorage:</strong> La aplicación utiliza localStorage para almacenar tus tareas localmente en tu navegador. Esto significa que incluso si cierras la página y la vuelves a abrir, tus tareas seguirán estando disponibles.</li>
      <li><strong>Uso de Arrow Functions:</strong> En el código de la aplicación, utilizamos arrow functions para definir funciones de forma más concisa y clara. Las arrow functions tienen un comportamiento de enlace léxico, lo que significa que heredan el contexto de su ámbito circundante.</li>
      <li><strong>Estilos CSS Modulares:</strong> Los estilos CSS de la aplicación están organizados de forma modular, lo que facilita su mantenimiento y modificación. Cada componente tiene su propio archivo de estilos CSS, lo que ayuda a mantener la consistencia y la estructura del diseño.</li>
    </ul>
    <p>
      Esperamos que disfrutes usando nuestra aplicación y que te ayude a mantener tus tareas organizadas y bajo control. ¡Gracias por usar nuestra aplicación!
    </p>
  </div>
);

export default About;
