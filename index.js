// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend básico en Node.js!');
});

// Ruta API
app.get('/api/hello', (req, res) => {
  res.json({ mensaje: 'Hola desde la API' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
