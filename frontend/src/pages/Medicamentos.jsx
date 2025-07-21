// frontend/src/pages/Medicamentos.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Medicamentos.css';

const Medicamentos = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    id_categoria: '',
    unidad_medida: '',
    tipo_controlado: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario({
      ...formulario,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/medicamentos/registrar', formulario);
      alert('✅ Medicamento registrado con éxito');
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert('❌ Error al registrar medicamento');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registrar Medicamento</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
        <div>
          <label className="block">Nombre:</label>
          <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange}
            className="w-full border px-2 py-1 rounded" required />
        </div>

        <div>
          <label className="block">Descripción:</label>
          <textarea name="descripcion" value={formulario.descripcion} onChange={handleChange}
            className="w-full border px-2 py-1 rounded" />
        </div>

        <div>
          <label className="block">ID Categoría:</label>
          <input type="number" name="id_categoria" value={formulario.id_categoria} onChange={handleChange}
            className="w-full border px-2 py-1 rounded" required />
        </div>

        <div>
          <label className="block">Unidad de medida:</label>
          <input type="text" name="unidad_medida" value={formulario.unidad_medida} onChange={handleChange}
            className="w-full border px-2 py-1 rounded" required />
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="tipo_controlado" checked={formulario.tipo_controlado} onChange={handleChange} />
          <label>¿Es controlado?</label>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Medicamentos;
