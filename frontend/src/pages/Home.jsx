import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1>SIFHOS</h1>
        <p>Sistema Integral de Farmacia Hospitalaria</p>
        <div className="home-buttons">
          <Link to="/login" className="btn-login">Iniciar Sesión</Link>
          <Link to="/register" className="btn-register">Registrarse</Link>
        </div>
      </div>
    </div>
  );
}
