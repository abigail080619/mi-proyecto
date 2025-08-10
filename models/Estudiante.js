const mongoose = require('mongoose');

const cursosValidos = ["Matemática", "Historia", "Ciencias", "Arte"];

const EstudianteSchema = new mongoose.Schema(
    {
       nombre: { type: String, required: true },
       apellido: { type: String, 
               required: true 
                 },
       email: { type: String, 
              required: true,    
              unique: true  
              },
       cursos: [{type: String,
       enum: cursosValidos,
       required: true
       }]
    },
    {
        timestamps: true,
    }


);

const Estudiante = mongoose.model('Estudiante', EstudianteSchema);
module.exports = Estudiante;
