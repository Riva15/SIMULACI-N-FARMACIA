import React, { useState } from "react";
import axios from "axios";
import "../styles/Egreso.css";

const Egreso = () => {
  const [idLote, setIdLote] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const [destino, setDestino] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarEgreso = async () => {
    try {
      await axios.post("http://localhost:3001/api/egresos/registrar", {
        id_lote: parseInt(idLote),
        cantidad: parseInt(cantidad),
        usuario_id: parseInt(usuarioId),
        destino_area: destino,
        observaciones,
      });
      setMensaje("✅ Egreso registrado correctamente.");
      // Limpiar formulario
      setIdLote("");
      setCantidad("");
      setUsuarioId("");
      setDestino("");
      setObservaciones("");
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al registrar egreso.");
    }
  };

  return (
    <div className="container">
      <h2>🚚 Registrar Egreso</h2>

      <label htmlFor="idLote">ID del Lote:</label>
      <input
        id="idLote"
        type="number"
        value={idLote}
        onChange={(e) => setIdLote(e.target.value)}
        placeholder="Ej. 2"
      />

      <label htmlFor="cantidad">Cantidad:</label>
      <input
        id="cantidad"
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        placeholder="Ej. 5"
      />

      <label htmlFor="usuarioId">ID Usuario:</label>
      <input
        id="usuarioId"
        type="number"
        value={usuarioId}
        onChange={(e) => setUsuarioId(e.target.value)}
        placeholder="Ej. 1"
      />

      <label htmlFor="destino">Destino del egreso:</label>
      <input
        id="destino"
        type="text"
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
        placeholder="Ej. Farmacia Central"
      />

      <label htmlFor="observaciones">Observaciones:</label>
      <textarea
        id="observaciones"
        value={observaciones}
        onChange={(e) => setObservaciones(e.target.value)}
        rows="3"
        placeholder="Ej. Entregado con firma del responsable..."
      ></textarea>

      <button onClick={registrarEgreso}>Registrar Egreso</button>

      <p className="mensaje">{mensaje}</p>
    </div>
  );
};

export default Egreso;
