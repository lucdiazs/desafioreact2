// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';
import Navigation from './Components/NavigationBar';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;