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
