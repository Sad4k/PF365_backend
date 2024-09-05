const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const appRoutes = require('./routes/appRoutes');
const licenseRoutes = require('./routes/licenseRoutes');
const planRoutes = require('./routes/planRoutes');
const syncRoutes = require('./routes/syncRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/config');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/apps', appRoutes);
app.use('/api/licenses', licenseRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/sync', syncRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
