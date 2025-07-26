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
router.post('/filtrar', (req, res) => {
  const { tipo, tempo, categoria } = req.body;

  // Bloquear caso nenhum filtro esteja preenchido
  if (!tipo && !tempo && !categoria) {
    return res.json([]);
  }

  let resultado = meals.filter(item => {
    const tipoOk = !tipo || item.tipo === tipo;
    const tempoOk = !tempo || item.tempo === tempo;
    const categoriaOk = !categoria || item.categoria === categoria;

    return tipoOk && tempoOk && categoriaOk;
  });

  res.json(resultado);
});





module.exports = router;
