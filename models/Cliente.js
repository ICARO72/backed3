const mongoose = require("mongoose")

// el modelo que hacemos ak es el que vamos a montar en postman

const clienteSchema = mongoose.Schema({
  nombres: {
    type: String,
    require: true
  },
  apellidos: {
    type: String,
    require: true
  },
  documento:{
  type: Number,
    required: true
  },
  correo: {
    type: String,
    required:true
  },
  telefono: {
    type: Number,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
}, { versionkey: false })

module.exports = mongoose.model("Cliente", clienteSchema);