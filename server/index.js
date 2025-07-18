const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const randomizerRoutes = require('./routes/randomizer');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Rota base
app.use('/randomizer', randomizerRoutes);

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
