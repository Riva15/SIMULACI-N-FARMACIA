// src/pages/Dashboard.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    // Esto se ejecuta cada vez que entras o retrocedes a esta ruta
    console.log("Volviste al Dashboard:", location.pathname);
    // Si necesitas volver a cargar datos o forzar algo, hazlo aquí
  }, [location]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a SIFHOS</h1>
      <p style={styles.subtitle}>Sistema Integral de Farmacia Hospitalaria</p>

      <div style={styles.cardsContainer}>
        <Link to="/medicamentos" style={{ textDecoration: 'none' }}>
          <div style={styles.card}>
            <h3 style={{ color: '#ffffff' }}>Medicamentos</h3>
            <p>Gestiona el inventario de medicamentos.</p>
          </div>
        </Link>

        <Link to="/alertas" style={{ textDecoration: 'none' }}>
          <div style={styles.card}>
            <h2 style={{ color: '#ffffff' }}>Alertas</h2>
            <p>Revisa vencimientos y stock crítico.</p>
          </div>
        </Link>

        <Link to="/ingresos-egresos" style={{ textDecoration: 'none' }}>
          <div style={styles.card}>
            <h2 style={{ color: '#ffffff' }}>Ingresos / Egresos</h2>
            <p>Consulta el movimiento de medicamentos.</p>
          </div>
        </Link>

        <Link to="/reportes" style={{ textDecoration: 'none' }}>
          <div style={styles.card}>
            <h2 style={{ color: '#ffffff' }}>Reportes</h2>
            <p>Consulta los reportes Generales</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e3f2fd',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#970fb6ff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  cardsContainer: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center', // centrado de tarjetas
  },
  card: {
    width: '260px',
    backgroundColor: '#970fb6ff',
    color: '#ffffff', // 🔥 Hace que el texto sea blanco
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 105, 135, 0.15)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    textAlign: 'center',
  },
  cardHover: {
    transform: 'scale(5.05)',
  },
};