const pool = require('../config/db');

const registrarMedicamento = async (req, res) => {
  try {
    const { nombre, descripcion, id_categoria, unidad_medida, tipo_controlado } = req.body;

    const query = `
      INSERT INTO medicamento (nombre, descripcion, id_categoria, unidad_medida, tipo_controlado)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
      
    const values = [nombre, descripcion, id_categoria, unidad_medida, tipo_controlado];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('💥 Error al registrar medicamento:', error);
    res.status(500).json({ error: 'Error al registrar medicamento' });
  }
};

const obtenerMedicamentos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM medicamento');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener medicamentos:', error);
    res.status(500).json({ error: 'Error al obtener medicamentos' });
  }
};

module.exports = { registrarMedicamento, obtenerMedicamentos };
