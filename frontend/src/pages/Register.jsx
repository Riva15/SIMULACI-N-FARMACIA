import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";
import "../styles/register.css"; // ✅ RUTA CORRECTA AL CSS

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    contrasena: "",
    rol_id: "2",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/login");
    } catch (err) {
      alert("Error al registrar usuario.");
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombres"
            placeholder="Nombres"
            value={form.nombres}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={form.apellidos}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={form.contrasena}
            onChange={handleChange}
            required
          />
          <select name="rol_id" value={form.rol_id} onChange={handleChange}>
            <option value="1">Administrador</option>
            <option value="2">Farmacéutico</option>
            <option value="3">Médico</option>
            <option value="4">Técnico</option>
          </select>
          <button type="submit">Registrarme</button>
        </form>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="link">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
