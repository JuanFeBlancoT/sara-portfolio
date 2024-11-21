import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'; // Página base ahora es Home
import Menu from './components/Menu'; // Menu ahora es una página común
import Cocina from './components/pages/Cocina';
import Jardin from './components/pages/jardin';
import Escaleras from './components/pages/escaleras';
import Cuarto from './components/pages/cuarto';
import Estanteria from './components/pages/estanteria';
import Layout from './components/layout';
import Carousel from './components/pages/carousel';
import Contact from './components/pages/Contact';
import { useLocation } from "react-router-dom";

const PdfViewer = ({ file }) => (
  <iframe
    src={file}
    title="PDF Viewer"
    style={{ width: "100%", height: "100vh", border: "none" }}
  ></iframe>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Página base cambiada a Home */}
          <Route path="menu" element={<Menu />} /> {/* Menu ahora es una página común */}
          <Route path="jardin" element={<Jardin />} />
          <Route path="escaleras" element={<Escaleras />} />
          <Route path="cocina" element={<Cocina />} />
          <Route path="cuarto" element={<Cuarto />} />
          <Route path="estanteria" element={<Estanteria />} />
          <Route path="contacto" element={<Contact />} />
          {/* Ruta dinámica para el carrusel */}
          <Route path="carousel/:type" element={<Carousel />} />

          {/* Nuevas rutas para visualizar los PDF */}
          <Route
            path="vivir-en-creacion-eterna"
            element={<PdfViewer file="/pdfs/vivir-en-creacion-eterna.pdf" />}
          />
          <Route
            path="ciclo-sabio"
            element={<PdfViewer file="/pdfs/ciclo-sabio.pdf" />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
