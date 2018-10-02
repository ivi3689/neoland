const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productoSchema = new Schema({
  nombre: String,
  precio: Number,
  departamento: String,
  activo: Boolean
})

productoSchema.statics.activos = function(flag, cb){
  let f = (flag === 'si') ? true : false
  return this.model('Producto').find({activo: f}, cb)
}

productoSchema.statics.insert = function (pProducto, cb){
  return this.model('Producto').create(pProducto, cb)
}

productoSchema.methods.mismoDepartamento = function (cb){
 return  this.model('Producto').find({departamento: this.departamento}, cb)
}

module.exports = mongoose.model('Producto', productoSchema)