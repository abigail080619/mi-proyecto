**API de Gestión Escolar**

Este proyecto es una API REST desarrollada con Node.js, Express y MongoDB para gestionar estudiantes y los cursos en los que están inscritos.  
Permite realizar operaciones **CRUD** y filtrar estudiantes por curso.

---

Características

- **Crear**, **leer**, **actualizar** y **eliminar** estudiantes.
- Filtrar estudiantes por curso usando un parámetro de consulta (`?curso=`).
- Validación de cursos permitidos
  - Matemática
  - Historia
  - Ciencias
  - Arte
- Validación de email único por estudiante.

---

Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/) (para desarrollo)

---

**INSTRUCCION PARA PROBAR LA API**

*Crear estudiantes (POST)
Endpoint:

http

POST /estudiantes
Body JSON: lo hice por separado para no utilizar array sino si deberiamos pero en mi caso me salia error :(
{
  "nombre": "Pedro",
  "apellido": "Pérez",
  "email": "pedro2.perez@example.com",
  "cursos": ["Matemática", "Ciencias"]
}
{
  "nombre": "Juan",
  "apellido": "García",
  "email": "juan.garcia@example.com",
  "cursos": ["Historia", "Arte"]
}
{
  "nombre": "María",
  "apellido": "López",
  "email": "maria.lopez@example.com",
  "cursos": ["Ciencias"]
}
*Obtener todos los estudiantes (GET)
GET /estudiantes

*Filtrar por curso (GET)

GET /estudiantes?curso=Matemática

*Obtener estudiante por ID (GET)
http
Copiar
Editar
GET /estudiantes/:id
💡 El ID lo obtienes al crear un estudiante o al listar todos, es decir que debemos copiar el ID y pegar 

*Actualizar un estudiante (PUT)

PUT /estudiantes/:id
Body JSON de ejemplo:

{
  "nombre": "Pedro Modificado",
  "apellido": "Pérez",
  "email": "pedro.modificado@example.com",
  "cursos": ["Historia"]
}
*Eliminar un estudiante (DELETE)

DELETE /estudiantes/:id

