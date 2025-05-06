import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Inventario</h3>
      <ul>
        <li><a href="#">Productos</a></li>
        <li><a className="active" href="#">Agregar producto</a></li>
        <li><a href="#">Actualizar inventario</a></li>
      </ul>
      <h3>Ventas</h3>
      <ul>
        <li><a href="#">Clientes</a></li>
        <li><a href="#">Órdenes de venta</a></li>
      </ul>
      <h3>Compras</h3>
      <ul>
        <li><a href="#">Proveedores</a></li>
        <li><a href="#">Órdenes de compra</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
