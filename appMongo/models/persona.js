const mongoose = require('mongoose')
const Schema = mongoose.Schema

let personaSchema = new Schema({
  nombre: String,
  apellidos: String,
  cursos: []
})

personaSchema.virtual('nombre_completo').get(function() {
  return this.nombre + " " + this.apellidos
})

personaSchema.virtual('nombre_completo').set(function (value) {
  var splitArr = value.split(" ")
  this.nombre = splitArr[0]
  this.apellidos = splitArr[1]
})

module.exports = mongoose.model('Persona', personaSchema)