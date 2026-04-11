require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const frasesRoutes = require('./src/routes/frases.routes');

app.use('/frases', frasesRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
//"scripts": {
//    "dev": "node --watch server.js"
//  }