import React from 'react';
import './Header.css';
import busqueda from '../assets/busqueda.png';
import check from '../assets/check.png';
import corazon from '../assets/corazon.png';
import carrito from '../assets/carrito.png';
import usuario from '../assets/usuario.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">THE FORMULA</div>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Iniciar sesión</a>
        <a href="#">Regístrate</a>
      </nav>
      <div className="icons">
      <div className="search-container">
  <input type="text" placeholder="¿Qué estás buscando?" />
  <img src={busqueda} alt="Buscar" className="search-icon" />
</div>
        <button><img src={corazon} alt="Favoritos" /></button>
        <button><img src={carrito} alt="Carrito" /></button>
        <button><img src={usuario} alt="Usuario" /></button>

      </div>
    </header>
  );
}

export default Header;
