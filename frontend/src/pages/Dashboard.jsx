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
            <h3>Medicamentos</h3>
            <p>Gestiona el inventario de medicamentos.</p>
          </div>
        </Link>
        
        <Link to="/alertas" style={{ textDecoration: 'none'}}>
          <div style={styles.card}>
            <h2>Alertas</h2>
            <p>Revisa vencimientos y stock crítico.</p>
          </div>
        </Link>

        <Link to="/ingresos-egresos" style={{ textDecoration: 'none'}}>
          <div style={styles.card}>
            <h2>Ingresos / Egresos</h2>
            <p>Consulta el movimiento de medicamentos.</p>
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
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
  },
  cardsContainer: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1',
    minWidth: '250px',
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer'
  },
};
