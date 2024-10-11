import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../src/components/Menu';
import Cocina from './components/pages/Cocina';  // Supongamos que tienes estas páginas
import Jardin from './components/pages/jardin';
import Escaleras from './components/pages/escaleras';
import Cuarto from './components/pages/cuarto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="/jardin" element={<Jardin />} />
        <Route path="/escaleras" element={<Escaleras />} />
        <Route path="/cuarto" element={<Cuarto />} />
      </Routes>
    </Router>
  );
}

export default App;
