const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');

// GET todos o filtrados
router.get('/estudiantes', async (req, res) => {
  try {
    const { curso } = req.query;
    const filtro = curso ? { cursos: { $in: [curso] } } : {};
    const estudiantes = await Estudiante.find(filtro);
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET por ID
router.get('/estudiantes/:id', async (req, res) => {
  try {
    const estudiante = await Estudiante.findById(req.params.id);
    if (!estudiante) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST
router.post('/estudiantes', async (req, res) => {
  try {
    const nuevo = new Estudiante(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT actualizar estudiante
router.put('/estudiantes/:id', async (req, res) => {
  try {
    const actualizado = await Estudiante.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!actualizado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE eliminar estudiante
router.delete('/estudiantes/:id', async (req, res) => {
  try {
    const eliminado = await Estudiante.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json({ mensaje: 'Estudiante eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
