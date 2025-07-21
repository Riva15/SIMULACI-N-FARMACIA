const db = require('../config/db');

exports.obtenerLotes = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM ingreso'); // O según tu necesidad
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener lotes:', err);
    res.status(500).json({ error: 'Error al obtener lotes' });
  }
};

exports.registrarEgreso = async (req, res) => {
  const { id_lote, cantidad, usuario_id, destino_area, observaciones } = req.body;

  const client = await db.connect();
  try {
    await client.query('BEGIN');

    const loteResult = await client.query('SELECT cantidad FROM ingreso WHERE id_lote = $1', [id_lote]);
    if (loteResult.rowCount === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'Lote no encontrado' });
    }

    const stockDisponible = loteResult.rows[0].cantidad;
    if (stockDisponible < cantidad) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: 'Stock insuficiente para realizar el egreso' });
    }

    await client.query(`
      INSERT INTO egreso (id_lote, fecha_egreso, cantidad, usuario_id, destino_area, observaciones)
      VALUES ($1, NOW(), $2, $3, $4, $5)
    `, [id_lote, cantidad, usuario_id, destino_area, observaciones]);

    await client.query(`
      UPDATE ingreso
      SET cantidad = cantidad - $1
      WHERE id_lote = $2
    `, [cantidad, id_lote]);

    await client.query('COMMIT');
    res.status(201).json({ message: 'Egreso registrado correctamente' });

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error al registrar egreso:', err);
    res.status(500).json({ error: 'Error interno al registrar el egreso' });
  } finally {
    client.release();
  }
};
