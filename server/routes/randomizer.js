const express = require('express');

module.exports = (mealsCollection) => {
  const router = express.Router();

  // Modo Surpresa
  router.get('/surpresa', async (req, res) => {
    const meals = await mealsCollection.find().toArray();
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

  // Modo Filtro 
  router.post('/filtrar', async (req, res) => {
    const { tipo, tempo, categoria } = req.body;
    const query = {};

    if (tipo) query.tipo = tipo;
    if (tempo) query.tempo = tempo;
    if (categoria) query.categoria = categoria;

    const resultado = await mealsCollection.find(query).toArray();
    res.json(resultado);
  });

  return router;
};
