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

class Vivienda{
  constructor(pPiso, pLetra) {
    this._habitantes = []
    this._piso = pPiso
    this._letra = pLetra
  }

  get habitantes() {
    return this._habitantes
  }

  set habitantes(nuevoHabitantes) {
    this._habitantes = nuevoHabitantes
  }

  get piso() {
    return this._piso
  }

  set piso(nuevoPiso) {
    this._piso = nuevoPiso
  }

  get letra() {
    return this._letra
  }

  set letra(nuevoLetra) {
    this._letra = nuevoLetra
  }

  agregarHabitante(pPersona) 
  {
    this._habitantes.push(pPersona)
  }

  mostrarVivienda() 
  {
    let res = `Piso: ${this._piso}. Letra: ${this._letra}`
    for (let i = 0; i < this._habitantes.length; i++)
    {
      res += '\n' + this._habitantes[i].mostrarPersona()
    }
    return res
  }

}

class Edificio 
{
  constructor(calle) 
  {
    this.viviendas = []
    this.calle = calle
  }

  agregarVivienda(pVivienda) 
  {
    this.viviendas.push(pVivienda)
  }

  mostrarEdificio() 
  {
    let res = `Edificio en la calle: ${this.calle}`

    for (let i = 0; i < this.viviendas.length; i++)
    {
      res+= '\n' + this.viviendas[i].mostrarVivienda()
    }

    return res
  }
}

class Animal



let per1 = new Persona('Mario', 'Girón', 34)
let per2 = new Persona('Pepe', 'Rodríguez', 76)
let per3 = new Persona('Mª Rosa', 'Gutiérrez', 29)
let v1 = new Vivienda(3, 'A')
let v2 = new Vivienda(4, 'B')
v1.agregarHabitante(per1)
v1.agregarHabitante(per2)
v2.agregarHabitante(per3)
let edif1 = new Edificio('C/ Gran Vía 23')
edif1.agregarVivienda(v1)
edif1.agregarVivienda(v2)
console.log(edif1.mostrarEdificio())