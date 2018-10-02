class Persona {
  constructor(pNombre, pApellidos, pEdad) {
    this._nombre = pNombre
    this._apellidos = pApellidos
    this._edad = pEdad
  }

  get nombre() {
    return this._nombre
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre
  }

  get apellidos() {
    return this._apellidos
  }

  set apellidos(nuevoApellidos) {
    this._apellidos = nuevoApellidos
  }

  get edad() {
    return this._edad
  }

  set edad(nuevoEdad) {
    this._edad = nuevoEdad
  }

  mostrarPersona() {
    return `Me llamo ${this._nombre} ${this._apellidos} y tengo ${this._edad}`
  }
}

class Animal{
  constructor(pNombre, pCuidador) {
    this.nombre = pNombre
    this.cuidador = pCuidador    
  }
}

class Perro extends Animal{
  constructor(pNombre, pCuidador, pRaza) {
    super(pNombre, pCuidador)
    this.raza = pRaza
  }

  hablar() {
    return 'Guau Guau'
  }

  mostrar() {
    return `Soy un perro, me llamo ${this.nombre} y mi cuidador se llama ${this.cuidador.nombre}`
  }
}

class Gato extends Animal{
  constructor(pNombre, pCuidador, pPelo) {
    super(pNombre, pCuidador)
    this.pelo = pPelo
  }

  hablar() {
    return 'Miau Miau'
  }

  mostrar() {
    return `Soy un gato, me llamo ${this.nombre}, mi cuidador se llama ${this.cuidador.nombre} y ${this.pelo ? 'tengo pelo' : 'no tengo pelo'}`
  }
}

let pers1 = new Persona('Mario', 'Girón', 34)
let perr1 = new Perro('Chipi', pers1, 'Mastín')
console.log(perr1.hablar())
console.log(perr1.mostrar())

let gato1 = new Gato('Gary', pers1, false)
console.log(gato1.hablar())
console.log(gato1.mostrar())