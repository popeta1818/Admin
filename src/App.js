import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AgregarProducto from './components/AgregarProducto';
import DetallesProducto from './components/DetallesProducto';
import Dimensiones from './components/Dimensiones'; // Paso 3
import PasoMarca from './components/PasoMarca';
import Imagen from './components/Imagen';
import Final from './components/Final';



import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="content"> {/* Muy importante: contenedor donde renderizas las rutas */}
          <Routes>
            <Route path="/" element={<AgregarProducto />} />
            <Route path="/detalles" element={<DetallesProducto />} />
            <Route path="/paso3" element={<Dimensiones />} />
            <Route path="/PasoMarca" element={<PasoMarca />} />
            <Route path="/Imagen" element={<Imagen />} />
            <Route path="/Final" element={<Final />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
