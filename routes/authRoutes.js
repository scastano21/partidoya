const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController'); // Asegúrate de que el nombre del archivo y las funciones sean correctas

// Ruta para registrar usuarios
router.post('/register', register);

// Ruta para el login de usuarios
router.post('/login', login);

module.exports = router;

