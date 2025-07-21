import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/IngresosEgresos.css';

const IngresosEgresos = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [idLote, setIdLote] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const [origen, setOrigen] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/api/medicamentos")
      .then(res => setMedicamentos(res.data))
      .catch(err => console.error("Error al obtener medicamentos", err));
  }, []);

  const registrarIngreso = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/ingresos/registrar", {
        id_lote: parseInt(idLote),
        cantidad: parseInt(cantidad),
        usuario_id: parseInt(usuarioId),
        origen
      });
      setMensaje("✅ Ingreso registrado con éxito");
      setIdLote(""); setCantidad(""); setUsuarioId(""); setOrigen("");
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al registrar ingreso");
    }
  };

  return (
    <div className="container">
      <h2>📦 Ingresos / Egresos de Medicamentos</h2>

      <div className="medicamentos">
        <h3>Lista de Medicamentos</h3>
        <ul>
          {medicamentos.map((med) => (
            <li key={med.id_medicamento}>{med.nombre}</li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="formulario">
        <h3>Registrar Ingreso</h3>

        <label>
          ID Lote:
          <input
            type="number"
            value={idLote}
            onChange={(e) => setIdLote(e.target.value)}
          />
        </label>

        <label>
          Cantidad:
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </label>

        <label>
          ID Usuario:
          <input
            type="number"
            value={usuarioId}
            onChange={(e) => setUsuarioId(e.target.value)}
          />
        </label>

        <label>
          Origen:
          <input
            type="text"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          />
        </label>

        <button onClick={registrarIngreso}>Registrar Ingreso</button>
        <p className="mensaje">{mensaje}</p>
      </div>
    </div>
  );
};

export default IngresosEgresos;
