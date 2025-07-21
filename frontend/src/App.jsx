import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Medicamentos from './pages/Medicamentos';
import NuevoMedicamento from  './pages/NuevoMedicamento';
import IngresosEgresos from './pages/IngresosEgresos';

import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/nuevo-medicamento" element={<NuevoMedicamento />} />
          <Route path="/ingresos-egresos" element={<IngresosEgresos />} />

       </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
