const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.BACKEND_LOCAL_PORT || 3000; // Utiliza el puerto definido en la variable de entorno o 3000 por defecto
const backendIP = process.env.BACKEND_IP || 'localhost'; // Utiliza la dirección IP definida en la variable de entorno o 'localhost' por defecto

app.use(cors());

app.get('/', (req, res) => {
  let fechaHoraActual = new Date();
  let textoFechaHora = fechaHoraActual.toLocaleString();
  let msg = `¡Hola Mundo desde el backend! ${textoFechaHora}`;
  console.log(textoFechaHora);
  res.send(msg);
});

app.listen(port, backendIP, () => {
  console.log(`El servidor del backend está corriendo en http://${backendIP}:${port}`);
});

/*
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  let fechaHoraActual = new Date();
  let textoFechaHora = fechaHoraActual.toLocaleString();
  let msg = `¡Hola Mundo desde el backend! ${textoFechaHora}`;
  console.log(textoFechaHora);
  res.send(msg);
});

app.listen(port, () => {
  console.log(`El servidor del backend está corriendo en http://localhost:${port}`);
});
*/