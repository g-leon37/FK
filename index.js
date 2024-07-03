// Cargar variables de entorno desde .env
require('dotenv').config();

// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');

// Crear una instancia de Express
const app = express();

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Configurar una ruta básica
app.get('/', (req, res) => {
  res.send('¡Bienvenido a Feria de las Fresas!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
