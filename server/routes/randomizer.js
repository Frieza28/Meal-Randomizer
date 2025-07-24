const express = require('express');
const router = express.Router();
const meals = require('../db/meals.json');

// Modo Surpresa Total
router.get('/surpresa', (req, res) => {
  const random = meals[Math.floor(Math.random() * meals.length)];
  res.json(random);
});

// Modo Lista
router.post('/lista', (req, res) => {
  const { lista } = req.body;
  if (!Array.isArray(lista) || lista.length === 0) {
    return res.status(400).json({ erro: 'Lista inválida' });
  }
  const random = lista[Math.floor(Math.random() * lista.length)];
  res.json({ escolhido: random });
});

// Modo Escolha (filtros)
app.post('/randomizer/filtrar', (req, res) => {
  console.log('Filtros recebidos:', req.body);  // ← Verifica se tipo, tempo e categoria vêm mesmo como strings vazias

  const { tipo, tempo, categoria } = req.body;

  if (!tipo && !tempo && !categoria) {
    return res.json([]);
  }

  const resultado = dados.filter(item => {
    return (!tipo || item.tipo === tipo) &&
           (!tempo || item.tempo === tempo) &&
           (!categoria || item.categoria === categoria);
  });

  res.json(resultado);
});




module.exports = router;
