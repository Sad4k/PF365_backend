//Declaraciones de funcionamiento
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
//const ejs = require('ejs');
const bodyParser = require('body-parser');
//const session = require('express-session');
//Configuracion
const config = require('./config/config.js');
//const syncDb = require('./assets/scripts/sync.js');

const authRoutes = require('./routes/authRoutes');

app.get('/', (req, res) => {
  res.send('Server On');
});


// Rutas de autenticación
app.use('/api/auth', authRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

