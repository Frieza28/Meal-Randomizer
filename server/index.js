const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const randomizerRoutes = require('./routes/randomizer');

const app = express();
const PORT = 3001;

const client = new MongoClient('mongodb://localhost:27017');
let mealsCollection;

app.use(cors());
app.use(bodyParser.json());

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('mealRandomizerDB');
    mealsCollection = db.collection('meals');
    console.log('MongoDB Ligado');

    app.use('/randomizer', randomizerRoutes(mealsCollection));

    app.listen(PORT, () => {
      console.log(`Servidor a correr em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao ligar ao MongoDB:', error);
  }
}
connectDB();

app.get('/api/meals', async (req, res) => {
  try {
    const meals = await mealsCollection.find().toArray();
    res.json(meals);
  } catch (error) {
    res.status(500).send('Erro ao buscar refeições');
  }
});
