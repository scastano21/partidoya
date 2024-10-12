const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');  // Importar cors
require('dotenv').config();

const app = express();

// Conectar a MongoDB
connectDB();

// Habilitar CORS para todas las solicitudes desde cualquier origen
app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
