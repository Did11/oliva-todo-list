import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import TodoList from './components/TodoList'; // Asegúrate de importar TodoList

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/todos" element={<TodoList />} />
    </Routes>
  </Router>
);

export default App;
