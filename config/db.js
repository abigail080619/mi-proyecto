const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/dbGestionEscolar"), 
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = dbConnect;
