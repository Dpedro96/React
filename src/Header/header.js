import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css"

function Header() {
  return (
    <header>
      <Link className="logo" to="/">Sua Receita</Link>
      <Link className="favoritos" to="/adicionar">Adicionar Receita</Link>
    </header>
  );
}

export default Header;