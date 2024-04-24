// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import TodoList from './components/TodoList';
import './App.css';

const App = () => (
  <Router>
    <div className="app-container">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
