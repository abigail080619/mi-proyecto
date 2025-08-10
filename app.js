const express = require('express');
const app = express();
const dbConnect = require('./config/db');
const estudiantesRoutes = require('./routes/estudiantes');

app.use(express.json());
app.use(estudiantesRoutes);

dbConnect().then(() => {
    app.listen(3001, () => {
      console.log('Servidor corriendo en el puerto 3001');
    });
  })
  .catch(err => {
    console.log('No se pudo iniciar el servidor por error en la base de datos');
  });
