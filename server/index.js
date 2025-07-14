// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3001;

app.get('/api/random-meal', (req, res) => {
  const meals = [
    { name: "Frango assado", type: "Carne" },
    { name: "Salmão grelhado", type: "Peixe" },
    { name: "Omelete de espinafres", type: "Vegetariano" }
  ];
  const random = meals[Math.floor(Math.random() * meals.length)];
  res.json(random);
});

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
